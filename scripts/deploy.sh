#!/usr/bin/env bash
#
# Deploy dist/ to the grace.tr production host.
#
#   ./scripts/deploy.sh [tag]
#
# Run `npm run prerender && npm run build` first — prerender must be re-run after
# any content change or the build injects stale snapshots.
#
# Caddy on the host serves `precompressed br gzip zstd`, so every text asset needs
# a freshly generated .br/.gz alongside it. Skipping that step makes Caddy serve
# the PREVIOUS deploy's compressed bytes while the uncompressed file looks correct
# — a failure mode that hides from any check that only reads the .html.
#
# --delete is deliberately never passed to rsync; /var/www/grace holds assets that
# are not build outputs.

set -euo pipefail

TAG="${1:-$(date +%Y%m%d-%H%M%S)}"
HOST="grace-server"
STAGE="/tmp/grace-dist-${TAG}"
LIVE="/var/www/grace"
BACKUP="/var/www/grace.bak.${TAG}"
OWNER="deploy:www-data"

cd "$(dirname "$0")/.."

say() { printf '\n=== %s ===\n' "$1"; }

say "preflight (local)"
[ -d dist ] || { echo "dist/ missing — run npm run build"; exit 1; }
LOCAL_HTML=$(find dist -name index.html | wc -l | tr -d ' ')
echo "  dist/: $(find dist -type f | wc -l | tr -d ' ') files, ${LOCAL_HTML} index.html"
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "  WARNING: working tree is dirty — deploying code that is not committed."
  echo "           (this is how production drifted from git once before)"
fi
echo "  HEAD: $(git rev-parse --short HEAD)"

say "preflight (remote)"
ssh -o BatchMode=yes "$HOST" "
  set -eu
  test -d '$LIVE' || { echo '  $LIVE missing'; exit 1; }
  test -e '$BACKUP' && { echo '  backup $BACKUP already exists — pick another tag'; exit 1; }
  avail=\$(df --output=avail -k '$LIVE' | tail -1)
  echo \"  free on \$(df --output=target '$LIVE' | tail -1): \$((avail/1024)) MiB\"
  [ \"\$avail\" -gt 524288 ] || { echo '  under 512 MiB free — aborting'; exit 1; }
  sudo -n true || { echo '  sudo needs a password'; exit 1; }
  echo \"  live now: \$(find '$LIVE' -type f | wc -l) files, owner \$(stat -c %U:%G '$LIVE')\"
"

say "upload to staging"
# Plain -a on purpose. macOS ships openrsync as /usr/bin/rsync, and any flag that makes
# it send filter rules (--delete-excluded, --exclude, ...) crashes the receiving rsync
# 3.2.7 on the host with "buffer overflow: recv_rules". The staging dir is fresh per tag,
# so there is nothing to delete anyway. Seen 2026-09-23 on the first real run.
rsync -a dist/ "${HOST}:${STAGE}/"
echo "  staged at ${STAGE}"

say "verify staging"
LOCAL_SUM=$(cd dist && find . -type f -print0 | sort -z | xargs -0 shasum -a 256 | shasum -a 256 | cut -c1-16)
REMOTE_SUM=$(ssh -o BatchMode=yes "$HOST" "cd '$STAGE' && find . -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum | cut -c1-16")
echo "  local  $LOCAL_SUM"
echo "  remote $REMOTE_SUM"
[ "$LOCAL_SUM" = "$REMOTE_SUM" ] || { echo "  staging differs from dist/ — aborting"; exit 1; }

say "precompress (brotli + gzip, forced)"
ssh -o BatchMode=yes "$HOST" "
  set -eu
  cd '$STAGE'
  find . -type f \\( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.svg' \\
       -o -name '*.json' -o -name '*.xml' -o -name '*.txt' \\) \\
    ! -name '*.br' ! -name '*.gz' -print0 |
  while IFS= read -r -d '' f; do
    brotli -f -k -q 11 \"\$f\"
    gzip   -f -k -9    \"\$f\"
  done
  echo \"  .br: \$(find . -name '*.br' | wc -l)   .gz: \$(find . -name '*.gz' | wc -l)\"
"

say "backup + install"
ssh -o BatchMode=yes "$HOST" "
  set -eu
  sudo cp -a '$LIVE' '$BACKUP'
  echo \"  backed up to $BACKUP (\$(sudo find '$BACKUP' -type f | wc -l) files)\"
  sudo rsync -a '$STAGE/' '$LIVE/'
  sudo chown -R $OWNER '$LIVE'
  echo \"  installed: \$(find '$LIVE' -type f | wc -l) files, owner \$(stat -c %U:%G '$LIVE')\"
"

say "done"
echo "  rollback:  ssh $HOST 'sudo rsync -a --delete $BACKUP/ $LIVE/'"
echo "  verify:    curl -sSI https://grace.tr/"
