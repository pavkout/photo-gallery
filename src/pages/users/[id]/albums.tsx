import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';
import Link from 'next/link';

// Import types
import { Album } from '../../../types';

// Import API
import { getAlbumByUserId } from '../../../utils/api';

// Import constants
import { albumColors } from '../../../constants';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: inherit;
`;

const Albums = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 310px);
  width: 100%;
  padding-top: 20px;
  flex-direction: row;

  @media screen and (min-width: 1000px) {
  }
`;

const AlbumTitle = styled.span`
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  transition: 0.5s ease;
  white-space: nowrap;
  text-transform: capitalize;
  user-select: none;
  color: ${(props) => props.color};

  @media screen and (min-width: 1000px) {
    // transform: translate(-50%, -50%);
  }
`;

const StyledAlbum = styled.div`
  flex: 1;
  position: relative;
  transition: 0.5s ease;
  background-color: ${(props) => props.bg};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover,
  &:active,
  &:focus {
    flex: 1.1;
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #757171;
`;

const Desc = styled.span`
  color: #a0a0a0;
  padding-top: 10px;
`;

interface IParams extends ParsedUrlQuery {
  id: string;
}

type Props = {
  albums: Album[];
};

const AlbumsPage: NextPage<Props> = ({ albums = [] }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Albums</Title>
        <Desc>Please select an album to discover.</Desc>
      </Header>
      <Albums count={albums.length}>
        {albums.map(({ id, title }: Album, idx: number) => {
          return (
            <Link key={id} href={`/albums/${id}/photos`}>
              <StyledAlbum bg={albumColors[idx].bg}>
                <AlbumTitle color={albumColors[idx].color}>{title}</AlbumTitle>
              </StyledAlbum>
            </Link>
          );
        })}
      </Albums>
    </Wrapper>
  );
};

export default AlbumsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;

  const albums = await getAlbumByUserId(id);

  return { props: { albums } };
};
