// import component 👇
import Drawer from 'react-modern-drawer';
import styled from 'styled-components';

// Import components
import ToggleSwitch from '../ToggleSwitch';

// Import store
import { useAppContext } from '../../state/store';
import {
  changeColumnWidth,
  changeGutters,
  changeImageType,
  changeOrientation,
  changeRandomSize,
  closeSettings,
} from '../../state/actions';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import SliderInput from '../SliderInput';

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
  const {
    isSettingsOpen,
    isRealImages,
    isHorizontal,
    gutters,
    columnWidth,
    isRandomSize,
  } = state;

  const toggleDrawer = () => {
    dispatch(closeSettings());
  };

  const toggleImageType = () => {
    dispatch(changeImageType());
  };

  const toggleOrientation = () => {
    dispatch(changeOrientation());
  };

  const handleChangeGutters = (gutters: number | string) => {
    dispatch(changeGutters(gutters));
  };

  const handleColumnWidth = (columnWidth: number | string) => {
    dispatch(changeColumnWidth(columnWidth));
  };
  const handleChangeRandomSize = () => {
    dispatch(changeRandomSize());
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
        <Title>Image Type</Title>
        <ToggleSwitch
          checked={isRealImages}
          label='Use real images'
          onChange={toggleImageType}
        />
      </SettingOption>
      <SettingOption>
        <Title>Orientation</Title>
        <ToggleSwitch
          checked={isHorizontal}
          label='Use horizontal orientation'
          onChange={toggleOrientation}
        />
      </SettingOption>
      <SettingOption>
        <Title>Image size</Title>
        <ToggleSwitch
          checked={isRandomSize}
          label='Use random image size'
          onChange={handleChangeRandomSize}
        />
      </SettingOption>
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
