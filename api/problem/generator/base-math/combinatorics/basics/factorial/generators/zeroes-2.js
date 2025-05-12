// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/01-combinatorics/1+basics/4-factorial/generators/zeroes-2.gen.ts
var zeroes_2_gen_default = defineProblemGenerator((random) => {
  let m = random.integer(50, 100);
  let n = random.integer(50, 100);
  let answer = 0;
  let divider = 5;
  let zeros;
  do {
    zeros = Math.floor(n / divider);
    answer += zeros;
    divider *= 5;
  } while (zeros > 0);
  answer *= m;
  return {
    m: `$${m}$`,
    n: `$${n}$`,
    expression: `$$ \\underbrace{${n}! \\cdot ${n}! \\cdot \\ldots \\cdot ${n}!}_{${m} \\ раз} $$`,
    answer: `$${answer}$`
  };
});
export {
  zeroes_2_gen_default as default
};
