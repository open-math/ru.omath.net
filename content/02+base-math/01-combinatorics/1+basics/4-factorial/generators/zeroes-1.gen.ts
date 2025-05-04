export default defineProblemGenerator((random) => {
    let n = random.integer(101, 1000);

    let answer = 0;
    let divider = 5;
    let zeros;

    do {
        zeros = Math.floor(n / divider);
        answer += zeros;
        divider *= 5;
    } while (zeros > 0);

    return {
        n: `${n}!`,
        answer: `${answer}`,
    };
});
