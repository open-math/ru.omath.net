// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/01-combinatorics/1+basics/4-factorial/generators/zeroes-1.gen.ts
var zeroes_1_gen_default = defineProblemGenerator((random) => {
  let n = random.integer(101, 1e3);
  let answer = 0;
  let divider = 5;
  let zeros;
  do {
    zeros = Math.floor(n / divider);
    answer += zeros;
    divider *= 5;
  } while (zeros > 0);
  return {
    n: `${n}!`,
    answer: `${answer}`
  };
});
export {
  zeroes_1_gen_default as default
};
