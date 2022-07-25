import React, { useEffect, useRef } from 'react';
import StackGrid, { transitions } from 'react-stack-grid';
import styled from 'styled-components';

// Import components
import PhotoImage from '../PhotoImage';

// Import types
import type { Photo } from '../../types';

// Import store
import { useAppContext } from '../../state/store';
import { usePrevious } from '../../hooks/usePrevious';

// Extract scaleDown from transitions;
const { scaleDown } = transitions;

const StyledStackGrid = styled(StackGrid)`
  margin: 50px auto;
  width: 90%;
`;

type Props = {
  photos: Photo[];
};

const Album = ({ photos }: Props) => {
  const grid = useRef();
  // Use context
  const { state } = useAppContext();

  const prevState = usePrevious(state);

  // Destract needed state values
  const { gutters, columnWidth, isRandomSize } = state;

  useEffect(() => {
    if (state !== prevState && grid && grid.current) {
      grid.current.updateLayout();
    }
  }, [state, prevState, grid]);

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
      monitorImagesLoaded={isRandomSize}
    >
      {photos.map((photo: Photo) => (
        <PhotoImage key={photo.id} photo={photo} />
      ))}
    </StyledStackGrid>
  );
};

export default Album;
