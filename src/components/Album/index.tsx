import React, { useEffect, useRef } from 'react';
import StackGrid, { transitions, easings } from 'react-stack-grid';
import styled from 'styled-components';

// Import components
import PhotoImage from '../PhotoImage';

// Import types
import type { Photo } from '../../types';

// Import store
import { useAppContext } from '../../state/store';
import { usePrevious } from '../../hooks/usePrevious';

// Import helper function
import { getFilteredPhotos } from './helper';

// Extract scaleDown from transitions;
const { scaleDown } = transitions;
const { quartOut } = easings;

const StyledStackGrid = styled(StackGrid)`
  margin: 50px auto;
  width: 90%;
`;

const Emptycontainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #757171;
`;

type Props = {
  photos: Photo[];
};

const Album = ({ photos = [] }: Props) => {
  const grid = useRef();
  // Use context
  const { state } = useAppContext();

  const prevState = usePrevious(state);

  // Destract needed state values
  const { gutters, columnWidth, searchingValue } = state;

  useEffect(() => {
    if (
      (gutters !== prevState?.gutters ||
        columnWidth !== prevState?.columnWidth ||
        searchingValue !== prevState?.searchingValue) &&
      grid &&
      grid.current
    ) {
      // @ts-ignore
      grid.current.updateLayout();
    }
  }, [gutters, columnWidth, searchingValue, prevState]);

  const displayedPhotos = getFilteredPhotos(searchingValue, photos);

  if (displayedPhotos.length === 0) {
    return (
      <Emptycontainer>
        <span>Τhere are no results.</span>
      </Emptycontainer>
    );
  }

  return (
    <StyledStackGrid
      gridRef={grid.current}
      columnWidth={columnWidth}
      appear={scaleDown.appear}
      appeared={scaleDown.appeared}
      enter={scaleDown.enter}
      entered={scaleDown.entered}
      leaved={scaleDown.leaved}
      gutterWidth={gutters}
      gutterHeight={gutters}
      monitorImagesLoaded={true}
      duration={480}
      easing={quartOut}
    >
      {displayedPhotos.map((photo: Photo) => (
        <PhotoImage key={photo.id} photo={photo} />
      ))}
    </StyledStackGrid>
  );
};

export default Album;
