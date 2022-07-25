/* eslint-disable no-useless-concat */
import { getAlbumByUserId, getPhotosByAlbumId, getUsers } from '../utils/api';
import { albums, photos, users } from '../dummy/test.api';

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

describe('Validating API data', () => {
  // This is actual testing suite
  test('Users API works', async () => {
    // highlight-start
    global.fetch = () =>
      Promise.resolve({ json: () => Promise.resolve(users) });
    // highlight-end

    const json = await getUsers();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(10);
  });

  // This is actual testing suite
  test('Albums API works with given user id', async () => {
    // highlight-start
    global.fetch = () =>
      Promise.resolve({ json: () => Promise.resolve(albums) });
    // highlight-end

    const json = await getAlbumByUserId('1');
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(10);
  });

  // This is actual testing suite
  test('Photos API works with given album id', async () => {
    // highlight-start
    global.fetch = () =>
      Promise.resolve({ json: () => Promise.resolve(photos) });
    // highlight-end

    const json = await getPhotosByAlbumId('8');
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(50);
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
  delete global.fetch;
});
