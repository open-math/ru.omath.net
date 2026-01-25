// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/01-basics/02-equations/2-quadratic/generators/feet-of-clay.ts
var feet_of_clay_default = defineProblemGenerator((random) => {
  const dividers = [2, 3, 5];
  const simplifySteps = random.integer(3, 5);
  let root1, root2, canonicA, canonicB, canonicC;
  do {
    [root1, root2] = randomRoots(random);
    canonicA = 1;
    canonicB = -(root1 + root2);
    canonicC = root1 * root2;
  } while (canonicB === 0 || canonicC === 0);
  const canonicEquation = `x^2 ${signed(canonicB)}x ${signed(canonicC)} = 0`;
  let problemA = canonicA;
  let problemB = canonicB;
  let problemC = canonicC;
  for (let i = 0; i < simplifySteps; i++) {
    const divider = random.arrayElement(dividers) * (random.boolean() ? 1 : -1);
    problemA *= divider;
    problemB *= divider;
    problemC *= divider;
  }
  const problemEquation = `${problemA}x^2 ${signed(problemB)}x ${signed(problemC)} = 0`;
  return {
    root1,
    root2,
    canonicEquation,
    problemEquation
  };
});
function randomRoots(random) {
  const root1 = random.integer(-8, 8);
  const root2 = random.integer(-8, 8);
  return [root1, root2];
}
function signed(value) {
  return (value < 0 ? "-" : "+") + Math.abs(value);
}
export {
  feet_of_clay_default as default
};
