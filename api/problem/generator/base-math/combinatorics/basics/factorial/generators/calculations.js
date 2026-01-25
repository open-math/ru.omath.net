// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// content/02+base-math/01-combinatorics/1+basics/4-factorial/generators/calculations.gen.ts
var calculations_gen_default = defineProblemGenerator((random) => {
  const problem1 = (() => {
    const n = random.integer(20, 100);
    const diff = random.integer(1, 2);
    let answer = 1;
    for (let i = 0; i < diff; i++) {
      answer *= n - i;
    }
    return {
      expression1: `\\frac{${n}!}{${n - diff}!}`,
      answer1: answer
    };
  })();
  const problem2 = (() => {
    const n = random.integer(20, 100);
    let answer = (n - 1) * (n - 1);
    return {
      expression2: `\\frac{${n}! - ${n - 1}!}{${n - 2}!}`,
      answer2: answer
    };
  })();
  const problem3 = (() => {
    let n = random.integer(20, 100);
    let m = random.integer(20, 100);
    let nDiff = random.integer(1, 2);
    let mDiff = random.integer(1, 2);
    let action = random.integer(0, 1);
    if (!action) {
      if (m > n) {
        [n, m] = [m, n];
        [nDiff, mDiff] = [mDiff, nDiff];
      }
    }
    let answer = n * (nDiff === 2 ? n - 1 : 1) + (action ? 1 : -1) * m * (mDiff === 2 ? m - 1 : 1);
    return {
      expression3: `\\frac{${n}!}{${n - nDiff}!} ${action ? "+" : "-"} \\frac{${m}!}{${m - mDiff}!}`,
      answer3: answer
    };
  })();
  const problem4 = (() => {
    let n = random.integer(20, 1e3);
    let a = random.integer(2, 10);
    let b = random.integer(2, 100);
    let c = random.integer(2, 100);
    let action1 = random.integer(0, 1);
    let action2 = random.integer(0, 1);
    let answer = n * a + (action1 ? 1 : -1) * b + (action2 ? 1 : -1) * c;
    return {
      expression4: `\\frac{ ${n}!\\cdot${a} ${action1 ? "+" : "-"} ${n - 1}!\\cdot ${b} ${action2 ? "+" : "-"} ${n - 1}! \\cdot ${c}}{ ${n - 1}! }`,
      answer4: answer
    };
  })();
  const problem5 = (() => {
    let n = random.integer(20, 1e3);
    let a = random.integer(2, 100);
    let action = random.integer(0, 1);
    let answer = 1;
    return {
      expression5: `\\frac{ ${n + (action ? 1 : -1) * a} \\cdot ${n}! ${action ? "-" : "+"} ${a + (action ? -1 : 1) * 1} \\cdot ${n} \\cdot ${n - 1}!  }{ ${n + 1}! }`,
      answer5: answer
    };
  })();
  return {
    ...problem1,
    ...problem2,
    ...problem3,
    ...problem4,
    ...problem5
  };
});
export {
  calculations_gen_default as default
};
