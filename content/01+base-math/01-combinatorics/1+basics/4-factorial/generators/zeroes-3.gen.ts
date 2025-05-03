export default defineProblemGenerator((random) => {
    let m = random.integer(300, 1000);
    let n = random.integer(15, 75);
    let power = random.integer(2, 3);

    let findZeros = (num: number) => {
        let zerosNum = 0;
        let divider = 5;
        let zeros;

        do {
            zeros = Math.floor(num / divider);
            zerosNum += zeros;
            divider *= 5;
        } while (zeros > 0);

        return zerosNum;
    };

    let mZeros = findZeros(m);
    let nZeros = findZeros(n);

    let answer = mZeros - power * nZeros;

    return {
        m: `$${m}$`,
        n: `$${n}$`,
        expression: `$$ \\frac{${m}!}{${n}!^${power}} $$`,
        answer: `$${answer}$`,
    };
});
