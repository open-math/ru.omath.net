// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/01-basics/01-equations/2-quadratic/generators/mental-gymnastics.ts
var mental_gymnastics_default = defineProblemGenerator((random) => {
  let m = random.integer(-12, 12);
  let n = random.integer(-12, 12);
  return {
    m,
    n,
    mnPlus: m + n,
    mnProd: m * n
  };
});
export {
  mental_gymnastics_default as default
};
