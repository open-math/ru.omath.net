export default defineProblemGenerator((random) => {
    let answerNum = 0;

    let start = random.integer(5, 15);
    let len = random.integer(5, 15);
    let k = random.integer(1, 3);

    for (let i = start; i <= start + len; i++) answerNum += Math.pow(i, k);

    return {
        statement:
            '$$' +
            `\\sum\\limits_{n=${start}}^{${start + len}} n^{${k}} = \\ ?` +
            '$$',
        answer: '$' + answerNum + '$',
    };
});
