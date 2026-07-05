import React from 'react';

export interface StickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which Memphis motif from the logo. @default 'plus' */
  shape?: 'plus' | 'striped' | 'slash' | 'split' | 'arc' | 'dot';
  /** @default 'coral' */
  color?: 'coral' | 'mint' | 'ink' | 'sun' | 'sky';
  /** Pixel size (square). @default 64 */
  size?: number;
  /** Rotation in degrees. @default 0 */
  rotate?: number;
}

/**
 * Decorative brand shape motif.
 * @startingPoint section="Brand" subtitle="Memphis shape stickers from the logo" viewport="700x200"
 */
export function Sticker(props: StickerProps): JSX.Element;
