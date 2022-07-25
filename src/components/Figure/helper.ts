type Chunk = {
  word: string;
  index: number;
};

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
      if (s.word.startsWith(swLow)) {
        const start = s.index;
        const end = s.index + s.word.length;
        chunks.push({
          start,
          end,
        });
      }
    });

    // The complete word including whitespace should also be handled, e.g.
    // searchWord='Angela Mer' should be highlighted in 'Angela Merkel'
    if (textLow.startsWith(swLow)) {
      const start = 0;
      const end = swLow.length;
      chunks.push({
        start,
        end,
      });
    }
  });

  return chunks;
};

export { findCustomChunks };
