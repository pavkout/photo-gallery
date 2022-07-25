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
 * The response type of errors from /api/*.
 */
export type ErrorResponse = string;

/**
 * The response type of /users
 */
// export type UsersResponse = {
//   results: User[];
// };

/**
 * The response type of /users.
 */
export type UsersResponse = User[];

/**
 * The response type of /api/albums
 */
export type AlbumsResponse = {
  results: Album[];
};

/**
 * The response type of /api/album/[id].
 */
export type AlbumResponse = Album;

/**
 * The response type of /api/photos
 */
export type PhotosResponse = {
  results: Photo[];
};

/**
 * The response type of /api/photos/[id].
 */
export type PhotoResponse = Photo;

/**
 * This type user for state management
 */

export interface IState {
  isSettingsOpen: boolean;
  isRealImages: boolean;
  gutters: number;
  columnWidth: number;
  isRandomSize: boolean;
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
