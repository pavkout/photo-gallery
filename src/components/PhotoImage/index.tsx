import React from 'react';
import styled from 'styled-components';

// Import components
import StaticImage from '../StaticImage';

// Import types
import { Photo } from '../../types';

// Import store
import { useAppContext } from '../../state/store';

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
  const { columnWidth } = state;

  // Init the url with the thumbnailUrl from image.
  let url = thumbnailUrl;

  // In case user change the column width when create a new url based on this width.
  if (columnWidth !== 150) {
    const urlArr = thumbnailUrl.split('/');
    urlArr[3] = columnWidth.toString();
    url = urlArr.join('/');
  }

  return (
    <StyledStaticImage
      title={title}
      src={url}
      width={columnWidth}
      height={columnWidth}
    />
  );
};

export default PhotoImage;
