import { pluralize, type Plural } from '#project/scripts/pluralize';

const classes: Plural[] = [
    ['журнал', 'журнала', 'журналов'],
    ['детектив', 'детектива', 'детективов'],
    ['справочник', 'справочника', 'справочников'],
    ['энциклопедия', 'энциклопедии', 'энциклопедий'],
    ['учебник', 'учебника', 'учебников'],
    ['задачник', 'задачника', 'задачников'],
    ['роман', 'романа', 'романов'],
    ['словарь', 'словаря', 'словарей'],
    ['газета', 'газеты', 'газет'],
    ['биография', 'биографии', 'биографий'],
];

export default defineProblemGenerator((random) => {
    const numberOfClasses = random.integer(4, 6);
    const problemClasses = random.arrayElements(classes, numberOfClasses, true);
    const classNumbers = problemClasses.map(() => random.integer(3, 50));
    const answer = classNumbers.reduce((a, b) => a + b, 0);

    const enumeration = problemClasses
        .map(
            (cls, i) =>
                `$${classNumbers[i]}$ ${pluralize(classNumbers[i]!, ...cls)}`,
        )
        .join(', ')
        .replace(/, ([^,]*)$/, ' и $1');

    const solutionFormula = `${classNumbers.join(' + ')} = ${answer}`;

    return {
        enumeration,
        solutionFormula,
        answer,
    };
});
