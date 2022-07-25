type Chunk = {
  word: string;
  index: number;
};

/**
 * This function make custom searching into the given text. For example:
 * 1. If I were to search for "accu", the results would show the entire word "*accusamus*" as italicized.
 * 2. If I were to search for "fun" and there's a title with "refunds are not a fun time", the title would be displayed as "*refunds* are not a *fun* time". Both the word "refunds" and the word "fun" would be italicized.
 * 3. If I were to search for "fun", a string with the following substring would **not** be italicized "...fu n..."
 * @param param0 The given search parameter and the text.
 * @returns Created chunks with the searching results.
 */
const findCustomChunks = ({ searchWords, textToHighlight }) => {
  const chunks = [];
  const textLow = textToHighlight.toLowerCase();

  // Match at the beginning of each new word
  // New word start after whitespace
  const singleTextWords = textLow.split(' ');

  // It could be possible that there are multiple spaces between words
  // Hence we store the index (position) of each single word with textToHighlight
  let fromIndex = 0;
  const singleTextWordsWithPos: Chunk[] = singleTextWords.map(
    (s: string): Chunk => {
      const indexInWord = textLow.indexOf(s, fromIndex);

      // Change the start index
      fromIndex = indexInWord;

      return {
        word: s,
        index: indexInWord,
      };
    }
  );

  // Add chunks for every searchWord
  searchWords.forEach((sw: string) => {
    const swLow = sw.toLowerCase();

    // Do it for every single text word
    singleTextWordsWithPos.forEach((s: Chunk) => {
      if (s.word.includes(swLow)) {
        const start = s.index;
        const end = s.index + s.word.length;
        chunks.push({
          start,
          end,
        });
      }
    });
  });

  return chunks;
};

export { findCustomChunks };
