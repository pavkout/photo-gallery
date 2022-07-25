import { Key, Fetcher } from 'swr';
import { Album, Photo, User } from '../types';

const domain = 'http://jsonplaceholder.typicode.com';

export const getUsers: Fetcher<User[]> = () =>
  fetch(`${domain}/users`).then((res) => res.json());

export const getAlbumByUserId: Fetcher<Album[]> = (id: Key) =>
  fetch(`${domain}/users/${id}/albums`).then((res) => res.json());

export const getPhotosByAlbumId: Fetcher<Photo[]> = (id: Key) =>
  fetch(`${domain}/albums/${id}/photos`).then((res) => res.json());
