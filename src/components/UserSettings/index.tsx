// import component 👇
import Drawer from 'react-modern-drawer';
import styled from 'styled-components';

// Import components
import ToggleSwitch from '../ToggleSwitch';
import SliderInput from '../SliderInput';

// Import store
import { useAppContext } from '../../state/store';
import {
  changeColumnWidth,
  changeGutters,
  closeSettings,
} from '../../state/actions';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

const StyledDrawer = styled(Drawer)`
  padding: 5px;
`;

const SettingOption = styled.div`
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
`;

const Title = styled.h4`
  color: #757171;
`;

const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
`;

const HeaderTitle = styled.h3`
  color: #757171;
`;

const UserSettings = () => {
  // Use context
  const { state, dispatch } = useAppContext();

  // Destract needed state values
  const { isSettingsOpen, gutters, columnWidth } = state;

  // This function fires when user click anywhere outside the drawer
  const toggleDrawer = () => {
    dispatch(closeSettings());
  };

  // This function fires when user change the gutters
  const handleChangeGutters = (gutters: number | string) => {
    dispatch(changeGutters(gutters));
  };

  // This function fires when user change the column width
  const handleColumnWidth = (columnWidth: number | string) => {
    dispatch(changeColumnWidth(columnWidth));
  };

  return (
    <StyledDrawer
      open={isSettingsOpen}
      onClose={toggleDrawer}
      size={350}
      direction='right'
      className='drawer'
    >
      <Header>
        <HeaderTitle>Settigns</HeaderTitle>
      </Header>
      <SettingOption>
        <Title>Gutters</Title>
        <SliderInput value={gutters} onChange={handleChangeGutters} />
      </SettingOption>
      <SettingOption>
        <Title>Column width</Title>
        <SliderInput
          value={columnWidth}
          min={100}
          max={600}
          onChange={handleColumnWidth}
        />
      </SettingOption>
    </StyledDrawer>
  );
};

export default UserSettings;
