import type { Randomizer } from '@erudit-js/bitran-elements/problem/generator';
import { signed } from '#content/utils';

export default defineProblemGenerator((random) => {
    const [root1, root2] = generateRoots(random);

    const b = -(root1 + root2);
    const c = root1 * root2;

    return {
        root1,
        root2,
        equation: `x^2 ${signed(b)}x ${signed(c)} = 0`,
    };
});

function generateRoots(random: Randomizer) {
    let root1, root2;

    do {
        root1 = random.integer(-15, 15);
        root2 =
            Math.abs(root1) > 10
                ? random.integer(-7, 7)
                : random.integer(-15, 15);
    } while (root1 === 0 || root2 === 0);

    return [root1, root2] as const;
}
