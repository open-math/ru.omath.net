export default defineTopic({
    title: 'Сумма степеней чисел',
    description: `
        Суммы чисел, суммы квадратов, суммы кубов...
        Суммы последовательных чисел в разных степенях встречаются регулярно.
        Вы разберетесь, как можно быстро считать такие суммы.
        А ещё удивитесь, насколько часто эти суммы встречаются в самых необычных ситуациях, даже жизненных!
    `,
    contributors: ['gwynerva'],
    flags: {
        advanced: true,
    },
    dependencies: [
        '/combinatorics/combination',
        '/combinatorics/binomial-theorem',
    ],
});
