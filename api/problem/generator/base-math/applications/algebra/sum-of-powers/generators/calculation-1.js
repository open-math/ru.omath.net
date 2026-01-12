// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/02-applications/1+algebra/2-sum-of-powers/generators/calculation-1.gen.ts
var calculation_1_gen_default = defineProblemGenerator((random) => {
  let answerNum = 0;
  let n = random.integer(10, 30);
  let k = random.integer(1, 3);
  for (let i = 1; i <= n; i++) answerNum += Math.pow(i, k);
  return {
    statement: `$$\\sum\\limits_{n=1}^{${n}} n^{${k}} = \\ ?$$`,
    answer: "$" + answerNum + "$"
  };
});
export {
  calculation_1_gen_default as default
};
