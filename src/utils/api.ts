export const domain = 'http://jsonplaceholder.typicode.com';

export const getUsers = () =>
  fetch(`${domain}/users`).then((res) => res.json());

export const getAlbumByUserId = (id) =>
  fetch(`${domain}/users/${id}/albums`).then((res) => res.json());

export const getPhotosByAlbumId = (id) =>
  fetch(`${domain}/albums/${id}/photos`).then((res) => res.json());
