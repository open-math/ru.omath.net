export default defineProblemGenerator((random) => {
    let m = random.integer(50, 100);
    let n = random.integer(50, 100);

    let answer = 0;
    let divider = 5;
    let zeros;
    do {
        zeros = Math.floor(n / divider);
        answer += zeros;
        divider *= 5;
    } while (zeros > 0);

    answer *= m;

    return {
        m: `$${m}$`,
        n: `$${n}$`,
        expression: `$$ \\underbrace{${n}! \\cdot ${n}! \\cdot \\ldots \\cdot ${n}!}_{${m} \\ раз} $$`,
        answer: `$${answer}$`,
    };
});
