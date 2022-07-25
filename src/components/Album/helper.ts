import { Photo } from '../../types';

/**
 * This function filter the given photos based on the given string. if the title includes the string then return the photo.
 * @param searchingValue The searching title value.
 * @param photos The array with photos.
 * @returns New instance of filtered photos.
 */
export const getFilteredPhotos = (searchingValue: string, photos: Photo[]) =>
  photos.filter(
    (p) => p.title.toLowerCase().indexOf(searchingValue.toLowerCase()) > -1
  );
