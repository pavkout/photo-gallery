import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Import store
import { useAppContext } from '../../state/store';
import { changeSearchingValue } from '../../state/actions';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  width: 30rem;
  cursor: auto;
  padding: 1.5rem;
  height: 2rem;
  border-radius: 10rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: 1rem;
  border: none;
  color: white;

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Icon = styled.div`
  line-height: 1;
  pointer-events: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const SearchInput = () => {
  // Use context
  const { state, dispatch } = useAppContext();

  // Destract needed state values
  const { searchingValue } = state;

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchingValue(e.target.value));
  };

  return (
    <Wrapper>
      <Icon>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ height: '20px', width: '20px', color: '#fff' }}
        />
      </Icon>
      <Input
        onChange={handleValueChange}
        value={searchingValue}
        placeholder="Search for a photo..."
      />
    </Wrapper>
  );
};

export default SearchInput;
