import { ActionType, IState } from '../types';
import { initialState } from './initialState';

import {
  CHANGE_IMAGE_TYPE,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  INIT_STATE,
  CHANGE_GUTTERS,
  CHANGE_COLUMN_WIDTH,
  CHANGE_RANDOM_SIZE,
} from './types';

const Reducer = (state: IState = initialState, action: ActionType): any => {
  switch (action.type) {
    case CHANGE_IMAGE_TYPE: {
      const isRealImages = !state.isRealImages;

      return {
        ...state,
        isRealImages: isRealImages,
        columnWidth: isRealImages ? 250 : 150,
      };
    }
    case CHANGE_RANDOM_SIZE:
      return {
        ...state,
        isRandomSize: !state.isRandomSize,
      };
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
    default:
      return state;
  }
};

export default Reducer;
