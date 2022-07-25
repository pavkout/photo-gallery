import { findCustomChunks } from '../components/Figure/helper';

describe('findCustomChunks', () => {
  it.each([
    [
      'There is only one highlight word (Pavlos)',
      { searchWords: ['Pavlos'], textToHighlight: 'Hi my name is Pavlos' },
      [{ start: 14, end: 20 }],
    ],
    [
      'There are two highlight words (Pavlos and Pav)',
      {
        searchWords: ['Pav'],
        textToHighlight: 'Hi my name is Pavlos, and I have another name Pav',
      },
      [
        { start: 14, end: 21 },
        { start: 46, end: 49 },
      ],
    ],
    [
      'There is no any result',
      { searchWords: ['Pa v'], textToHighlight: 'Hi my name is Pa vlos' },
      [],
    ],
  ])('%s', (label, params, expectation) => {
    expect(findCustomChunks(params)).toStrictEqual(expectation);
  });
});
