import { ActionType, IState } from '../types';
import { initialState } from './initialState';

import {
  CHANGE_CUSTOM_SIZE,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  INIT_STATE,
  CHANGE_GUTTERS,
  CHANGE_COLUMN_WIDTH,
  CHANGE_SEARCHING_VALUE,
} from './types';

const Reducer = (state: IState = initialState, action: ActionType): any => {
  switch (action.type) {
    case CHANGE_CUSTOM_SIZE: {
      const savedValue = !state.useCustomSize;
      return {
        ...state,
        useCustomSize: savedValue,
        columnWidth: !savedValue ? 150 : state.columnWidth,
      };
    }
    case CHANGE_GUTTERS:
      return {
        ...state,
        gutters: +action.payload,
      };
    case CHANGE_COLUMN_WIDTH:
      return {
        ...state,
        columnWidth: +action.payload,
      };
    case INIT_STATE:
      return {
        ...state,
        ...(action.payload as Object),
        searchingValue: '',
      };
    case OPEN_SETTINGS:
      return {
        ...state,
        isSettingsOpen: true,
      };
    case CLOSE_SETTINGS:
      return {
        ...state,
        isSettingsOpen: false,
      };
    case CHANGE_SEARCHING_VALUE:
      return {
        ...state,
        searchingValue: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
