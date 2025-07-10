export default defineProblemGenerator((random) => {
    let m = random.integer(-12, 12);
    let n = random.integer(-12, 12);

    return {
        m,
        n,
        mnPlus: m + n,
        mnProd: m * n,
    };
});
