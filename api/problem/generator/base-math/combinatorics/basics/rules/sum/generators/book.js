// node_modules/@erudit-js/bitran-elements/dist/elements/problem/generator.mjs
function defineProblemGenerator(generator, initialSeed = "erudit-is-awesome") {
  return {
    generator,
    defaultSeed: initialSeed
  };
}

// scripts/pluralize.ts
function pluralize(number, one, two, five) {
  const text = [five, one, two, two, two, five][number % 100 > 10 && number % 100 < 20 ? 0 : Math.min(number % 10, 5)];
  return text;
}

// content/02+base-math/01-combinatorics/1+basics/3-rules/1-sum/generators/book.gen.ts
var classes = [
  ["журнал", "журнала", "журналов"],
  ["детектив", "детектива", "детективов"],
  ["справочник", "справочника", "справочников"],
  ["энциклопедия", "энциклопедии", "энциклопедий"],
  ["учебник", "учебника", "учебников"],
  ["задачник", "задачника", "задачников"],
  ["роман", "романа", "романов"],
  ["словарь", "словаря", "словарей"],
  ["газета", "газеты", "газет"],
  ["биография", "биографии", "биографий"]
];
var book_gen_default = defineProblemGenerator((random) => {
  const numberOfClasses = random.integer(4, 6);
  const problemClasses = random.arrayElements(classes, numberOfClasses, true);
  const classNumbers = problemClasses.map(() => random.integer(3, 50));
  const answer = classNumbers.reduce((a, b) => a + b, 0);
  const enumeration = problemClasses.map(
    (cls, i) => `$${classNumbers[i]}$ ${pluralize(classNumbers[i], ...cls)}`
  ).join(", ").replace(/, ([^,]*)$/, " и $1");
  const solutionFormula = `${classNumbers.join(" + ")} = ${answer}`;
  return {
    enumeration,
    solutionFormula,
    answer
  };
});
export {
  book_gen_default as default
};
