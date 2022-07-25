import React from 'react';

// Import components
import Figure from '../Figure';

export interface StaticImageProps {
  /**
   * Image height
   */
  height?: number;
  /**
   * Image width
   */
  width: number;
  /**
   * The title of the image
   */
  title?: string;
  /**
   * The image url
   */
  src: string;
}

const StaticImage = (props: StaticImageProps) => {
  const { width, height = width, title, src } = props;

  return (
    <Figure title={title}>
      <img alt={src} src={src} width={width} height={height} />
    </Figure>
  );
};

export default StaticImage;
