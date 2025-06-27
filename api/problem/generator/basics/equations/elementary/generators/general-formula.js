// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/01-basics/01-equations/1-elementary/generators/general-formula.ts
var general_formula_default = defineProblemGenerator((random) => {
  let A = random.integer(-10, 10);
  while (A === 0) {
    A = random.integer(-10, 10);
  }
  const B = random.integer(-20, 20);
  let equation = "";
  if (A === 1) {
    equation = "x";
  } else if (A === -1) {
    equation = "-x";
  } else {
    equation = `${A}x`;
  }
  if (B > 0) {
    equation += ` + ${B} = 0`;
  } else if (B < 0) {
    equation += ` - ${Math.abs(B)} = 0`;
  } else {
    equation += " = 0";
  }
  let root = "";
  if (B === 0) {
    root = "0";
  } else if (B % A === 0) {
    const intRoot = -B / A;
    root = intRoot.toString();
  } else {
    const numerator = -B;
    const denominator = A;
    const gcd = (a, b) => {
      a = Math.abs(a);
      b = Math.abs(b);
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    const simplifiedNum = numerator / divisor;
    const simplifiedDen = denominator / divisor;
    if (simplifiedDen === 1) {
      root = simplifiedNum.toString();
    } else if (simplifiedDen === -1) {
      root = (-simplifiedNum).toString();
    } else if (simplifiedDen < 0) {
      root = `-\\frac{${Math.abs(simplifiedNum)}}{${Math.abs(simplifiedDen)}}`;
    } else if (simplifiedNum < 0) {
      root = `-\\frac{${Math.abs(simplifiedNum)}}{${simplifiedDen}}`;
    } else {
      root = `\\frac{${simplifiedNum}}{${simplifiedDen}}`;
    }
  }
  return {
    equation,
    root,
    A,
    B
  };
});
export {
  general_formula_default as default
};
