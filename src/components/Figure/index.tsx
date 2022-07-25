import React, { ReactNode } from 'react';
import styled from 'styled-components';

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

const Figure = ({ title, children }: FigureProps) => (
  <StyledFigure>
    {children}
    <StyledFigcaption>{title}</StyledFigcaption>
  </StyledFigure>
);
export default Figure;
