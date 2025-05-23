// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/01-basics/01-equations/1-elementary/generators/zero-factors.ts
var zero_factors_default = defineProblemGenerator((random) => {
  const a = random.integer(-1e3, 1e3);
  const b = random.integer(-1e3, 1e3);
  const nonZeroA = a === 0 ? 5 : a;
  const nonZeroB = b === 0 ? 7 : b;
  let firstFactor, firstEquation;
  if (nonZeroA > 0) {
    firstFactor = `(x-${nonZeroA})`;
    firstEquation = `x - ${nonZeroA} = 0`;
  } else {
    firstFactor = `(x+${-nonZeroA})`;
    firstEquation = `x + ${-nonZeroA} = 0`;
  }
  let secondFactor, secondEquation;
  if (nonZeroB > 0) {
    secondFactor = `(x+${nonZeroB})`;
    secondEquation = `x + ${nonZeroB} = 0`;
  } else {
    secondFactor = `(x-${-nonZeroB})`;
    secondEquation = `x - ${-nonZeroB} = 0`;
  }
  const solution1 = nonZeroA;
  const solution2 = -nonZeroB;
  return {
    firstFactor,
    secondFactor,
    firstEquation,
    secondEquation,
    solution1,
    solution2
  };
});
export {
  zero_factors_default as default
};
