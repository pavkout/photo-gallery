import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

// Import hepler
import makeUrl from './helper';

const StyledFigure = styled.figure`
  position: relative;
`;

const StyledFigcaption = styled.figcaption`
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 12px;
  text-transform: capitalize;
`;

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
    <StyledFigure>
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
      <StyledFigcaption>{title}</StyledFigcaption>
    </StyledFigure>
  );
};

export default ImageGenerator;
