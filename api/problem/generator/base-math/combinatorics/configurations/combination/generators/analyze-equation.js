// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/01-combinatorics/2+configurations/3-combination/generators/analyze-equation.gen.ts
var analyze_equation_gen_default = defineProblemGenerator((random) => {
  let varLabels = ["x", "y", "z", "q", "t", "a", "b", "c", "m", "n"];
  let vars = random.arrayElements(varLabels, random.integer(2, 5));
  let equals = random.integer(5, 20);
  function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  let answer = factorial(equals + vars.length - 1) / (factorial(vars.length - 1) * factorial(equals));
  return {
    equation: `$$ ${vars.join(" + ") + " = " + equals} $$`,
    answer: `$ \\bar{C}_{${vars.length}}^{${equals}} = ${answer} $`
  };
});
export {
  analyze_equation_gen_default as default
};
