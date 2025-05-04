export default defineProblemGenerator((random) => {
    let answerNum = 0;

    let n = random.integer(10, 30);
    let k = random.integer(1, 3);

    for (let i = 1; i <= n; i++) answerNum += Math.pow(i, k);

    return {
        statement: '$$' + `\\sum\\limits_{n=1}^{${n}} n^{${k}} = \\ ?` + '$$',
        answer: '$' + answerNum + '$',
    };
});
