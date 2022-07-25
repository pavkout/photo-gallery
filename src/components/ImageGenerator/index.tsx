import React, { memo } from 'react';
import Image from 'next/image';

// Import components
import Figure from '../Figure';

// Import hepler
import makeUrl from './helper';

export type Blur = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type FileExtension = 'jpg' | 'webp';
export type RandomParam = number | string | boolean;

export interface ImageGeneratorProps {
  /**
   * Specify an image by ID
   */
  id?: number;
  /**
   * Image height
   */
  height?: number;
  /**
   * Image width
   */
  width: number;
  /**
   * Make the image grayscale
   */
  grayscale?: boolean;
  /**
   * Blur property - between 1 and 10
   */
  blur?: Blur;
  /**
   * Force identical images (height, width) on the same page to be random
   */
  random?: RandomParam;
  /**
   * File extension
   */
  extension?: FileExtension;
  /**
   * Calculate the height automatically based on an aspect ratio
   */
  ratio?: string;
  /**
   * The title of the image
   */
  title?: string;
}

const ImageGenerator = (props: ImageGeneratorProps) => {
  const {
    id,
    random,
    width,
    height = width,
    grayscale = false,
    blur,
    extension,
    ratio,
    title,
  } = props;

  return (
    <Figure title={title}>
      <Image
        src={makeUrl({
          id,
          random,
          width,
          height,
          grayscale,
          blur,
          extension,
          ratio,
        })}
        width={width}
        height={height}
        priority
      />
    </Figure>
  );
};

function areEqual(prevProps, nextProps) {
  return (
    prevProps.width === nextProps.width && prevProps.height === nextProps.height
  );
}

export default memo(ImageGenerator, areEqual);
