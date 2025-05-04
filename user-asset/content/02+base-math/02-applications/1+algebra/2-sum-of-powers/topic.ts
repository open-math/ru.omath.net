export default defineTopic({
    title: 'Сумма степеней чисел',
    description:
        'Суммы чисел, суммы квадратов, суммы кубов... Разберемся, как можно быстро считать такие суммы. Вы удивитесь, насколько часто они встречаются в самых необычных ситуациях!',
    contributors: ['gwynerva'],
    flags: {
        advanced: true,
    },
    dependencies: [
        '/combinatorics/combination',
        '/combinatorics/binomial-theorem',
    ],
});
