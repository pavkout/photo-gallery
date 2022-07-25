import {
  changeColumnWidth,
  changeGutters,
  changeImageType,
  changeRandomSize,
  changeSearchingValue,
  closeSettings,
  initState,
  openSettings,
} from '../state/actions';
import {
  CHANGE_COLUMN_WIDTH,
  CHANGE_GUTTERS,
  CHANGE_IMAGE_TYPE,
  CHANGE_RANDOM_SIZE,
  CHANGE_SEARCHING_VALUE,
  CLOSE_SETTINGS,
  INIT_STATE,
  OPEN_SETTINGS,
} from '../state/types';
import {
  testColumnWidth,
  testGutters,
  testSearchingValue,
  testState,
} from '../utils/reduxTestHelper';

// Create flag to store the active action.
let action;

describe('Album Reducer', () => {
  it('changeImageType has the correct type', () => {
    action = changeImageType();
    expect(action.type).toEqual(CHANGE_IMAGE_TYPE);
  });

  it('changeRandomSize the correct type', () => {
    action = changeRandomSize();
    expect(action.type).toEqual(CHANGE_RANDOM_SIZE);
  });

  it('openSettings has the correct type', () => {
    action = openSettings();
    expect(action.type).toEqual(OPEN_SETTINGS);
  });

  it('closeSettings the correct type', () => {
    action = closeSettings();
    expect(action.type).toEqual(CLOSE_SETTINGS);
  });

  it('initState has the correct type', () => {
    action = initState(testState);
    expect(action.type).toEqual(INIT_STATE);
  });

  it('initState the correct payload', () => {
    action = initState(testState);
    expect(action.payload).toEqual(testState);
  });

  it('changeGutters has the correct type', () => {
    action = changeGutters(testGutters);
    expect(action.type).toEqual(CHANGE_GUTTERS);
  });

  it('changeGutters the correct payload', () => {
    action = changeGutters(testGutters);
    expect(action.payload).toEqual(testGutters);
  });

  it('changeColumnWidth has the correct type', () => {
    action = changeColumnWidth(testColumnWidth);
    expect(action.type).toEqual(CHANGE_COLUMN_WIDTH);
  });

  it('changeColumnWidth the correct payload', () => {
    action = changeColumnWidth(testColumnWidth);
    expect(action.payload).toEqual(testColumnWidth);
  });

  it('changeSearchingValue has the correct type', () => {
    action = changeSearchingValue(testSearchingValue);
    expect(action.type).toEqual(CHANGE_SEARCHING_VALUE);
  });

  it('changeSearchingValue the correct payload', () => {
    action = changeSearchingValue(testSearchingValue);
    expect(action.payload).toEqual(testSearchingValue);
  });
});
