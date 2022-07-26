import reducer from '../state/reducer';
import { initialState } from '../state/initialState';

import test, {
  testColumnWidth,
  testGutters,
  testSearchingValue,
  testState,
} from '../utils/reduxTestHelper';

import {
  changeColumnWidth,
  changeGutters,
  changeSearchingValue,
  closeSettings,
  initState,
  openSettings,
} from '../state/actions';

describe('Album Reducer', () => {
  // Test the reucer on unknown action
  test(reducer).withCurrentState(initialState).run();

  // Test the OPEN_SETTINGS Action
  test(reducer)
    .onAction(openSettings())
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      isSettingsOpen: true,
    })
    .run();

  // Test the CLOSE_SETTINGS Action
  test(reducer)
    .onAction(closeSettings())
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      isSettingsOpen: false,
    })
    .run();

  // Test the INIT_STATE Action
  test(reducer)
    .onAction(initState(testState))
    .withCurrentState(initialState)
    .withDesiredState({
      ...initialState,
      ...testState,
      searchingValue: '',
    })
    .run();

  // Test the CHANGE_GUTTERS Action
  test(reducer)
    .onAction(changeGutters(testGutters))
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      gutters: +testGutters,
    })
    .run();

  // Test the CHANGE_COLUMN_WIDTH Action
  test(reducer)
    .onAction(changeColumnWidth(testColumnWidth))
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      columnWidth: +testColumnWidth,
    })
    .run();

  // Test the CHANGE_SEARCHING_VALUE Action
  test(reducer)
    .onAction(changeSearchingValue(testSearchingValue))
    .withCurrentState(testState)
    .withDesiredState({
      ...initialState,
      searchingValue: testSearchingValue,
    })
    .run();
});
