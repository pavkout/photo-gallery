import { IState } from '../types';
import {
  CHANGE_CUSTOM_SIZE,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  INIT_STATE,
  CHANGE_GUTTERS,
  CHANGE_COLUMN_WIDTH,
  CHANGE_SEARCHING_VALUE,
} from './types';

export const changeCustomSize = () => ({
  type: CHANGE_CUSTOM_SIZE,
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

export const changeSearchingValue = (value: string) => ({
  type: CHANGE_SEARCHING_VALUE,
  payload: value,
});
