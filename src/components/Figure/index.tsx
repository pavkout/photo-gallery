import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { findAll } from 'highlight-words-core';

// Import store
import { useAppContext } from '../../state/store';

// Import helper function
import { findCustomChunks } from './helper';

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

export interface FigureProps {
  /**
   * The title of the image
   */
  title?: string;
  /**
   * The image url
   */
  children: ReactNode;
}

const Figure = ({ title, children }: FigureProps) => {
  // Use context
  const { state } = useAppContext();

  // Destract needed state values
  const { searchingValue } = state;

  // In case the searchingValue is Empty return the text as it is.
  if (searchingValue === '' || searchingValue.trim() === '') {
    return (
      <StyledFigure>
        {children}
        <StyledFigcaption>{title}</StyledFigcaption>
      </StyledFigure>
    );
  }

  // Find all chunks with searching value.
  const chunks = findAll({
    searchWords: [searchingValue],
    textToHighlight: title,
    findChunks: findCustomChunks,
  });

  // Create the highlighted text from the given chunks.
  const highlightedText = chunks
    .map((chunk) => {
      const { end, highlight, start } = chunk;
      const text = title.substr(start, end - start);

      if (highlight) {
        return `<mark><strong><i>${text}</i></strong></mark>`;
      } else {
        return text;
      }
    })
    .join('');

  return (
    <StyledFigure>
      {children}
      <StyledFigcaption dangerouslySetInnerHTML={{ __html: highlightedText }} />
    </StyledFigure>
  );
};

export default Figure;
