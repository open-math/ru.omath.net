export default defineProblemGenerator((random) => {
    let varLabels = ['x', 'y', 'z', 'q', 't', 'a', 'b', 'c', 'm', 'n'];

    let vars = random.arrayElements(varLabels, random.integer(2, 5));

    let equals = random.integer(5, 20);

    function factorial(n: number): number {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }

    let answer =
        factorial(equals + vars.length - 1) /
        (factorial(vars.length - 1) * factorial(equals));

    return {
        equation: `$$ ${vars.join(' + ') + ' = ' + equals} $$`,
        answer: `$ \\bar{C}_{${vars.length}}^{${equals}} = ${answer} $`,
    };
});
