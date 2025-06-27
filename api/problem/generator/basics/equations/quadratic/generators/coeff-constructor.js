// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/utils.ts
function getRandomLetter(random) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return random.arrayElement(letters.split(""));
}

// content/01-basics/01-equations/2-quadratic/generators/coeff-constructor.ts
var coeff_constructor_default = defineProblemGenerator((random) => {
  const generateCoeff = () => {
    const type = random.integer(1, 6);
    switch (type) {
      case 1:
        return random.integer(-10, 10);
      case 2:
        const num = random.integer(-12, 12);
        const den = random.integer(2, 8);
        return `\\frac{${num}}{${den}}`;
      case 3:
        const radicand = random.integer(2, 20);
        const sign = random.boolean() ? "" : "-";
        return `${sign}\\sqrt{${radicand}}`;
      case 4:
        const a = random.integer(1, 5);
        const b = random.integer(1, 5);
        const op = random.boolean() ? "+" : "-";
        return `(${a}${op}${b})`;
      case 5:
        const coeff = random.integer(-3, 3);
        return coeff === 0 ? random.integer(1, 5) : `${coeff}\\pi`;
      default:
        const base = random.integer(1, 5);
        const root = random.integer(2, 9);
        return `${base}\\sqrt{${root}}`;
    }
  };
  const processCoeff = (coeff) => {
    const coeffStr = String(coeff);
    const parenMatch = coeffStr.match(/^\((\d+)([\+\-])(\d+)\)$/);
    if (parenMatch) {
      const [, a, op, b] = parenMatch;
      const result = op === "+" ? parseInt(a) + parseInt(b) : parseInt(a) - parseInt(b);
      return result;
    }
    const fracMatch = coeffStr.match(/^\\frac\{(-?\d+)\}\{(\d+)\}$/);
    if (fracMatch) {
      const [, num, den] = fracMatch;
      const numVal = parseInt(num);
      const denVal = parseInt(den);
      const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);
      const divisor = gcd(Math.abs(numVal), denVal);
      const simplifiedNum = numVal / divisor;
      const simplifiedDen = denVal / divisor;
      if (simplifiedDen === 1) {
        return simplifiedNum;
      } else {
        if (simplifiedNum < 0) {
          return `-\\frac{${Math.abs(simplifiedNum)}}{${simplifiedDen}}`;
        } else {
          return `\\frac{${simplifiedNum}}{${simplifiedDen}}`;
        }
      }
    }
    return coeff;
  };
  let A = generateCoeff();
  let B = generateCoeff();
  let C = generateCoeff();
  while (processCoeff(A) === 0) {
    A = generateCoeff();
  }
  const formatCoeff = (coeff, isFirst = false, variable = "") => {
    const processedCoeff = processCoeff(coeff);
    const coeffStr = String(processedCoeff);
    if (coeffStr === "0") return "";
    if (isFirst) {
      if (coeffStr === "1" && variable) return variable;
      if (coeffStr === "-1" && variable) return `-${variable}`;
      return `${coeffStr} ${variable}`;
    } else {
      if (coeffStr === "1" && variable) return ` + ${variable}`;
      if (coeffStr === "-1" && variable) return ` - ${variable}`;
      if (coeffStr.startsWith("-"))
        return ` - ${coeffStr.slice(1)} ${variable}`;
      return ` + ${coeffStr} ${variable}`;
    }
  };
  const letter = getRandomLetter(random);
  let equation = formatCoeff(A, true, `${letter}^2`);
  const bTerm = formatCoeff(B, false, `${letter}`);
  if (bTerm) equation += bTerm;
  const cTerm = formatCoeff(C, false, "");
  if (cTerm) equation += cTerm;
  equation += " = 0";
  return {
    letter,
    A,
    B,
    C,
    equation
  };
});
export {
  coeff_constructor_default as default
};
