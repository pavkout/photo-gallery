import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';

// Import components
import Album from '../../../components/Album';
import SearchInput from '../../../components/SearchInput';

// Import types
import type { Photo } from '../../../types';

// Import API
import { getPhotosByAlbumId } from '../../../utils/api';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h2`
  color: #757171;
`;

interface IParams extends ParsedUrlQuery {
  id: string;
}

type Props = {
  photos: Photo[];
};

const PhotosPage: NextPage<Props> = ({ photos = [] }) => (
  <Wrapper>
    <StyledTitle>Photos</StyledTitle>
    <SearchInput />
    <Album photos={photos} />
  </Wrapper>
);

export default PhotosPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;

  const photos = await getPhotosByAlbumId(id);

  return { props: { photos } };
};
