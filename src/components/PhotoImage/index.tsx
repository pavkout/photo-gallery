import React from 'react';
import styled from 'styled-components';

// Import components
import ImageGenerator from '../ImageGenerator';
import StaticImage from '../StaticImage';

// Import types
import { Photo } from '../../types';

// Import utils
import { generateRandom } from '../../utils/random';

// Import store
import { useAppContext } from '../../state/store';

const StyledImageGenerator = styled(ImageGenerator)`
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const StyledStaticImage = styled(StaticImage)`
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

type Props = {
  photo: Photo;
};

const PhotoImage = ({ photo: { thumbnailUrl, title } }: Props) => {
  // Use context
  const { state } = useAppContext();

  // Destract needed state values
  const { isRealImages, columnWidth, isRandomSize } = state;

  if (isRealImages) {
    return (
      <StyledImageGenerator
        title={title}
        width={columnWidth}
        height={isRandomSize ? generateRandom(100, 500, 40) : columnWidth}
        random={true}
      />
    );
  }

  return (
    <StyledStaticImage
      title={title}
      src={thumbnailUrl}
      width={columnWidth}
      height={150}
    />
  );
};

export default PhotoImage;
