import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 50px;
  height: 26px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 3px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #39484f;

    &:before {
      transform: translate(23px, -50%);
    }
  }
`;

const Text = styled.span`
  color: #a0a0a0;
  font-size: 14px;
`;

type Props = {
  checked: boolean;
  label: string;
  onChange: () => void;
};

const ToggleSwitch = ({ checked, label, onChange }: Props) => {
  // This function fires when user click on switch.
  const handleChange = () => {
    onChange();
  };

  return (
    <Label>
      <Text>{label}</Text>
      <Input checked={checked} type='checkbox' onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;
