import React, { useState } from 'react';
import { IMAGE_SRCSET } from '../lib/imageVariants.generated';

// `sizes` values for the card layouts that use this component. Each mirrors the grid it
// sits in (max-w-7xl = 1280px container, px-6 gutters) and was checked against the widths
// measured in Chrome — keep them in sync if a grid's columns, gap or padding change.
export const CARD_SIZES = {
  // Itinerary day card: half the row from lg up. Measured 576 CSS px @1440, 342 @390.
  itineraryDay: '(min-width: 1280px) 576px, (min-width: 1024px) calc((100vw - 8rem) / 2), calc(100vw - 3rem)',
  // /tours grid: 3 columns, gap-12. Measured 377 @1440, 340 @390.
  tourCard:
    '(min-width: 1280px) 379px, (min-width: 1024px) calc((100vw - 9rem) / 3), (min-width: 768px) calc((100vw - 6rem) / 2), calc(100vw - 3rem)',
  // /tickets grid: 3 columns, gap-10, p-6 inside the card. Measured 334 @1440, 292 @390.
  ticketCard:
    '(min-width: 1280px) 336px, (min-width: 1024px) calc((100vw - 8rem) / 3 - 3rem), (min-width: 768px) calc((100vw - 5.5rem) / 2 - 3rem), calc(100vw - 6rem)',
} as const;

type CardImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'onError'> & {
  src: string | undefined;
  /** Shown if `src` (or every candidate in its srcset) fails to load. */
  fallback: string;
  /** Rendered width, as an HTML `sizes` value. Defaults to the itinerary day card. */
  sizes?: string;
};

// Card image that downloads a 640/800/1200px rendition instead of the 1920px original
// (renditions come from scripts/make-image-variants.py).
//
// The failure state lives in React rather than in an onError that pokes the DOM: with a
// srcset present, assigning `img.src` no longer changes what is shown, and a DOM-only fix
// would be undone the next time React re-renders the element (e.g. a language switch).
const CardImage: React.FC<CardImageProps> = ({ src, fallback, sizes = CARD_SIZES.itineraryDay, ...rest }) => {
  const [failedSrc, setFailedSrc] = useState<string | undefined>(undefined);
  const url = src && src !== failedSrc ? src : fallback;
  const srcSet = IMAGE_SRCSET[url];
  return (
    <img
      {...rest}
      src={url}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      onError={url === fallback ? undefined : () => setFailedSrc(url)}
    />
  );
};

export default CardImage;
