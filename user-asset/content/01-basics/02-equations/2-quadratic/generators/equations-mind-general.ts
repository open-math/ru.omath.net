import { signed } from '#content/utils';

export default defineProblemGenerator((random) => {
    let A;
    do {
        A = random.integer(-5, 5);
    } while (A === 0 || A === 1 || A === -1);

    let root1;
    do {
        root1 = random.integer(-10, 10);
    } while (root1 === 0);

    let topRoot2;
    do {
        topRoot2 = random.integer(-5, 5);
    } while (Math.abs(topRoot2) >= Math.abs(A) || topRoot2 === 0);

    const root2 = generateIrreducibleFraction(topRoot2, A);

    const b = -(topRoot2 + A * root1);
    const c = root1 * topRoot2;

    return {
        root1,
        root2,
        equation: `${A}x^2 ${signed(b)}x ${signed(c)} = 0`,
    };
});

function generateIrreducibleFraction(
    numerator: number,
    denominator: number,
): string {
    const gcd = (a: number, b: number): number => {
        return b === 0 ? Math.abs(a) : gcd(b, a % b);
    };

    const commonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
    const reducedNumerator = Math.abs(numerator) / commonDivisor;
    const reducedDenominator = Math.abs(denominator) / commonDivisor;

    const isNegative =
        (numerator < 0 && denominator > 0) ||
        (numerator > 0 && denominator < 0);
    const sign = isNegative ? '-' : '';

    return `${sign}\\frac{${reducedNumerator}}{${reducedDenominator}}`;
}
