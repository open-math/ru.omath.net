// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/01-combinatorics/1+basics/4-factorial/generators/zeroes-3.gen.ts
var zeroes_3_gen_default = defineProblemGenerator((random) => {
  let m = random.integer(300, 1e3);
  let n = random.integer(15, 75);
  let power = random.integer(2, 3);
  let findZeros = (num) => {
    let zerosNum = 0;
    let divider = 5;
    let zeros;
    do {
      zeros = Math.floor(num / divider);
      zerosNum += zeros;
      divider *= 5;
    } while (zeros > 0);
    return zerosNum;
  };
  let mZeros = findZeros(m);
  let nZeros = findZeros(n);
  let answer = mZeros - power * nZeros;
  return {
    m: `$${m}$`,
    n: `$${n}$`,
    expression: `$$ \\frac{${m}!}{${n}!^${power}} $$`,
    answer: `$${answer}$`
  };
});
export {
  zeroes_3_gen_default as default
};
