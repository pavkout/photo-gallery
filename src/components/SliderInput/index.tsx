import { ChangeEvent } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  -webkit-appearance: none;
  height: 7px;
  width: 100%;
  background: #b3b3b3;
  border-radius: 5px;
  background-image: linear-gradient(#39484f, #39484f);
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #39484f;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-webkit-slider-thumb:active {
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: string) => void;
};

const SliderInput = ({ value, min = 0, max = 100, onChange }: Props) => {
  // The function fires when user slide on the input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Calculate the background size based on the given props
  const getBackgroundSize = () => {
    return { backgroundSize: `${((value - min) * 100) / (max - min)}% 100%` };
  };

  return (
    <Input
      type='range'
      min={min}
      max={max}
      onChange={handleChange}
      style={getBackgroundSize()}
      value={value}
    />
  );
};

export default SliderInput;
