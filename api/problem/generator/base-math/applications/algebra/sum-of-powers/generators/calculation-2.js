// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/02-applications/1+algebra/2-sum-of-powers/generators/calculation-2.gen.ts
var calculation_2_gen_default = defineProblemGenerator((random) => {
  let answerNum = 0;
  let start = random.integer(5, 15);
  let len = random.integer(5, 15);
  let k = random.integer(1, 3);
  for (let i = start; i <= start + len; i++) answerNum += Math.pow(i, k);
  return {
    statement: `$$\\sum\\limits_{n=${start}}^{${start + len}} n^{${k}} = \\ ?$$`,
    answer: "$" + answerNum + "$"
  };
});
export {
  calculation_2_gen_default as default
};
