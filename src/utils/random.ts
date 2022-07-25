/**
 * This function generate random numbers for raviews.
 * @param min The minimum value.
 * @param max The maximun value.
 * @param step The step value.
 * @returns The generated random number.
 */
export const generateRandom = (min: number, max: number, step: number) => {
  const randomNum = min + Math.random() * (max - min);
  return Math.round(randomNum / step) * step;
};
