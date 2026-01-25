import type { Randomizer } from '@erudit-js/bitran-elements/problem/generator';

export default defineProblemGenerator((random) => {
    const dividers = [2, 3, 5];
    const simplifySteps = random.integer(3, 5);

    let root1, root2, canonicA, canonicB, canonicC;
    do {
        [root1, root2] = randomRoots(random);
        canonicA = 1;
        canonicB = -(root1 + root2);
        canonicC = root1 * root2;
    } while (canonicB === 0 || canonicC === 0);

    const canonicEquation = `x^2 ${signed(canonicB)}x ${signed(canonicC)} = 0`;

    let problemA = canonicA;
    let problemB = canonicB;
    let problemC = canonicC;

    for (let i = 0; i < simplifySteps; i++) {
        const divider =
            random.arrayElement(dividers)! * (random.boolean() ? 1 : -1);

        problemA *= divider;
        problemB *= divider;
        problemC *= divider;
    }

    const problemEquation = `${problemA}x^2 ${signed(problemB)}x ${signed(problemC)} = 0`;

    return {
        root1,
        root2,
        canonicEquation,
        problemEquation,
    };
});

function randomRoots(random: Randomizer) {
    const root1 = random.integer(-8, 8);
    const root2 = random.integer(-8, 8);

    return [root1, root2] as const;
}

function signed(value: number) {
    return (value < 0 ? '-' : '+') + Math.abs(value);
}
