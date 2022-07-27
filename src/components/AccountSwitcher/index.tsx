import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';

// Import components
import UserAccount from '../UserAccount';

// Import types
import { User } from '../../types';

// Import constants
import { accountColors } from '../../constants';

// Import hooks
import { Size, useWindowSize } from '../../hooks/useWindowSize';

const Wrapper = styled.div`
  width: 600px;
  height: 500px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Slide = styled.div`
  transform: scale(0.5);
  transition: transform 300ms;
  opacity: 0.5;

  &.activeSlide {
    transform: scale(1);
    opacity: 1;
  }
`;

const arrow = css`
  width: 35px;
  height: 35px;
  background-color: #fff;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  transition: color 300ms;

  &:hover {
    color: #68edff;
  }
`;

const StyledPrevArrow = styled.div`
  ${arrow}

  left: 0%;
  top: 50%;
`;

const StyledNextArrow = styled.div`
  ${arrow}

  right: 0%;
  top: 50%;
`;

const NextArrow = ({ onClick }) => {
  return (
    <StyledNextArrow role="button" onClick={onClick}>
      <FontAwesomeIcon
        icon={faAngleRight}
        style={{ height: '100%', width: 'auto', color: '#4b4b4b' }}
      />
    </StyledNextArrow>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <StyledPrevArrow role="button" onClick={onClick}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        style={{ height: '100%', width: 'auto', color: '#4b4b4b' }}
      />
    </StyledPrevArrow>
  );
};

type Props = {
  accounts: User[];
};

const AccountSwitcher = ({ accounts }: Props) => {
  // Create flag to store the active slide.
  const [activeIndex, setActiveIndex] = useState(0);

  const size: Size = useWindowSize();

  // This function fires when user click on the prev button.
  const handlePrevClick = () => {
    setActiveIndex(activeIndex - 1);
  };

  // This function fires when user click on the next button.
  const handleNextClick = () => {
    setActiveIndex(activeIndex + 1);
  };

  // Define the options for the slick carousel
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: size.width <= 600 ? 1 : 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow onClick={handleNextClick} />,
    prevArrow: <PrevArrow onClick={handlePrevClick} />,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {accounts.map((account, idx) => (
          <Slide key={idx} className={idx === activeIndex && 'activeSlide'}>
            <UserAccount
              account={account}
              color={accountColors[idx]}
              active={idx === activeIndex}
            />
          </Slide>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default AccountSwitcher;
