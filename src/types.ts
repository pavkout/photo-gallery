import { Dispatch } from 'react';

/**
 * Type for user address.
 */
export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

/**
 * Type for user company
 */
export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

/**
 * Type for user
 */
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

/**
 * Type for Album
 */
export type Album = {
  userId: number;
  id: number;
  title: string;
};

/**
 * Type for Photo
 */
export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

/**
 * This type user for state management
 */

export interface IState {
  isSettingsOpen: boolean;
  useCustomSize: boolean;
  gutters: number;
  columnWidth: number;
  searchingValue: string;
}

export type ActionType = {
  type: string;
  payload?: unknown;
};

export type ContextType = {
  state: IState;
  dispatch: Dispatch<ActionType>;
};
