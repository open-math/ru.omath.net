// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/01-basics/02-equations/2-quadratic/generators/equation-from-roots.ts
var equation_from_roots_default = defineProblemGenerator((random) => {
  let root1 = random.integer(-100, 100);
  let root2 = random.integer(-100, 100);
  if (random.float(0, 1, 4) < 0.25) {
    if (random.boolean()) {
      root1 = 0;
    } else {
      root2 = 0;
    }
  }
  const b = -(root1 + root2);
  const c = root1 * root2;
  let equation = "x^2";
  if (b !== 0) {
    equation += b > 0 ? ` + ${b}x` : ` - ${Math.abs(b)}x`;
  }
  if (c !== 0) {
    equation += c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
  }
  equation += " = 0";
  let roots;
  if (root1 === 0 && root2 === 0) {
    roots = "$0$";
  } else if (root1 === 0 || root2 === 0) {
    const nonZeroRoot = root1 === 0 ? root2 : root1;
    roots = `$0$ и $${nonZeroRoot}$`;
  } else {
    roots = `$${root1}$ и $${root2}$`;
  }
  return {
    roots,
    equation
  };
});
export {
  equation_from_roots_default as default
};
