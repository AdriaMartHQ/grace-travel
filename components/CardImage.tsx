import React, { useState } from 'react';
import { IMAGE_SRCSET } from '../lib/imageVariants.generated';

// Rendered width of an itinerary day card: half of the max-w-7xl (1280px) row minus the
// px-6 gutters and the gap from lg up, the full row minus gutters below it. Measured on
// the live B2 page: 576 CSS px at 1440 wide, 342 at 390 wide.
const CARD_SIZES = '(min-width: 1280px) 576px, (min-width: 1024px) calc((100vw - 8rem) / 2), calc(100vw - 3rem)';

type CardImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'onError'> & {
  src: string | undefined;
  /** Shown if `src` (or every candidate in its srcset) fails to load. */
  fallback: string;
};

// Day-card image that downloads a 640/1200px rendition instead of the 1920px original
// (renditions come from scripts/make-image-variants.py).
//
// The failure state lives in React rather than in an onError that pokes the DOM: with a
// srcset present, assigning `img.src` no longer changes what is shown, and a DOM-only fix
// would be undone the next time React re-renders the element (e.g. a language switch).
const CardImage: React.FC<CardImageProps> = ({ src, fallback, ...rest }) => {
  const [failedSrc, setFailedSrc] = useState<string | undefined>(undefined);
  const url = src && src !== failedSrc ? src : fallback;
  const srcSet = IMAGE_SRCSET[url];
  return (
    <img
      {...rest}
      src={url}
      srcSet={srcSet}
      sizes={srcSet ? CARD_SIZES : undefined}
      onError={url === fallback ? undefined : () => setFailedSrc(url)}
    />
  );
};

export default CardImage;
