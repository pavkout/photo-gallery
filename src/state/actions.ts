import { IState } from '../types';
import {
  CHANGE_IMAGE_TYPE,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  INIT_STATE,
  CHANGE_GUTTERS,
  CHANGE_COLUMN_WIDTH,
  CHANGE_RANDOM_SIZE,
} from './types';

export const changeImageType = () => ({
  type: CHANGE_IMAGE_TYPE,
});

export const changeRandomSize = () => ({
  type: CHANGE_RANDOM_SIZE,
});

export const openSettings = () => ({
  type: OPEN_SETTINGS,
});

export const closeSettings = () => ({
  type: CLOSE_SETTINGS,
});

export const initState = (state: IState) => ({
  type: INIT_STATE,
  payload: state,
});

export const changeGutters = (gutters: number | string) => ({
  type: CHANGE_GUTTERS,
  payload: gutters,
});

export const changeColumnWidth = (columnWidth: number | string) => ({
  type: CHANGE_COLUMN_WIDTH,
  payload: columnWidth,
});
