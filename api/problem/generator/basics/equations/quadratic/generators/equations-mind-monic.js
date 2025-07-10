// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/utils.ts
function signed(value) {
  return value < 0 ? value.toString() : `+${value}`;
}

// content/01-basics/02-equations/2-quadratic/generators/equations-mind-monic.ts
var equations_mind_monic_default = defineProblemGenerator((random) => {
  const [root1, root2] = generateRoots(random);
  const b = -(root1 + root2);
  const c = root1 * root2;
  return {
    root1,
    root2,
    equation: `x^2 ${signed(b)}x ${signed(c)} = 0`
  };
});
function generateRoots(random) {
  let root1, root2;
  do {
    root1 = random.integer(-15, 15);
    root2 = Math.abs(root1) > 10 ? random.integer(-7, 7) : random.integer(-15, 15);
  } while (root1 === 0 || root2 === 0);
  return [root1, root2];
}
export {
  equations_mind_monic_default as default
};
