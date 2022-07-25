import { generateRandom } from '../utils/random';

describe('Test Random Function', () => {
  it('generateRandom not null', () => {
    expect(generateRandom(1, 5, 1)).not.toBeNull();
  });

  it('generateRandom has correct result', () => {
    const random = generateRandom(1, 5, 1);
    expect(random).toEqual(random);
  });
});
