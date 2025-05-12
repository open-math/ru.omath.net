// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/01-combinatorics/1+basics/2-brute-force/generators/dictionary.gen.ts
var letters = ["А", "Б", "В", "Г", "Д", "Е"];
var dictionary_gen_default = defineProblemGenerator((random) => {
  const cutLength = random.integer(3, 4);
  const cutStart = random.integer(0, letters.length - cutLength);
  const allowedLetters = letters.slice(cutStart, cutStart + cutLength);
  const wordLength = random.integer(4, 6);
  const maxPos = Math.pow(allowedLetters.length, wordLength) - 1;
  const targetPos = random.integer(50, maxPos);
  const getWordAtPos = (index) => {
    let word = "";
    let n = index - 1;
    for (let i = 0; i < wordLength; i++) {
      word = allowedLetters[n % allowedLetters.length] + word;
      n = Math.floor(n / allowedLetters.length);
    }
    return word;
  };
  const displayWords = [];
  for (let i = 1; i <= 5; i++) {
    const word = getWordAtPos(i);
    displayWords.push(word);
  }
  return {
    wordLength,
    allowedLetters: allowedLetters.join(", "),
    ...displayWords.reduce((acc, word, i) => {
      acc[`displayWord${i + 1}`] = word;
      return acc;
    }, {}),
    targetPos,
    targetWord: getWordAtPos(targetPos)
  };
});
export {
  dictionary_gen_default as default
};
