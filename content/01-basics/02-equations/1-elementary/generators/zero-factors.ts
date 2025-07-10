export default defineProblemGenerator((random) => {
    const a = random.integer(-1000, 1000);
    const b = random.integer(-1000, 1000);

    const nonZeroA = a === 0 ? 5 : a;
    const nonZeroB = b === 0 ? 7 : b;

    let firstFactor, firstEquation;
    if (nonZeroA > 0) {
        firstFactor = `(x-${nonZeroA})`;
        firstEquation = `x - ${nonZeroA} = 0`;
    } else {
        firstFactor = `(x+${-nonZeroA})`;
        firstEquation = `x + ${-nonZeroA} = 0`;
    }

    let secondFactor, secondEquation;
    if (nonZeroB > 0) {
        secondFactor = `(x+${nonZeroB})`;
        secondEquation = `x + ${nonZeroB} = 0`;
    } else {
        secondFactor = `(x-${-nonZeroB})`;
        secondEquation = `x - ${-nonZeroB} = 0`;
    }

    const solution1 = nonZeroA;
    const solution2 = -nonZeroB;

    return {
        firstFactor,
        secondFactor,
        firstEquation,
        secondEquation,
        solution1,
        solution2,
    };
});
