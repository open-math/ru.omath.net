import type { Randomizer } from '@erudit-js/bitran-elements/problem/generator';
import { getRandomLetter } from '#content/utils';

export default defineProblemGenerator((random) => {
    const { from: from1, to: to1 } = getFirstProblem(random);
    const { from: from2, to: to2 } = getSecondProblem(random);
    const { from: from3, to: to3 } = getThirdProblem(random);
    const { from: from4, to: to4 } = getFourthProblem(random);

    return {
        from1,
        to1,
        from2,
        to2,
        from3,
        to3,
        from4,
        to4,
    };
});

type Problem = {
    from: string;
    to: string;
};

function getFirstProblem(random: Randomizer): Problem {
    const letter = getRandomLetter(random);
    const multiplier = random.integer(1, 60);
    const sign = random.boolean() ? '+' : '-';

    return {
        from: `${letter}^2 ${sign} ${2 * multiplier} ${letter}`,
        to: `(${letter} ${sign} ${multiplier})^2 - ${multiplier ** 2}`,
    };
}

function getSecondProblem(random: Randomizer): Problem {
    const letter = getRandomLetter(random);
    let multiplier;

    do {
        multiplier = random.integer(1, 30);
    } while (multiplier % 2 === 0);

    const sign = random.boolean() ? '+' : '-';

    return {
        from: `${letter}^2 ${sign} ${multiplier} ${letter}`,
        to: `\\left(${letter} ${sign} \\frac{${multiplier}}{2}\\right)^2 - \\frac{${multiplier ** 2}}{4}`,
    };
}

function getThirdProblem(random: Randomizer): Problem {
    const letter = getRandomLetter(random);
    const b = random.integer(1, 20);
    const c = random.integer(1, 50);
    const sign1 = random.boolean() ? '+' : '-';
    const sign2 = random.boolean() ? '+' : '-';

    const remainder = c - b ** 2 / 4;
    const remainderSign = remainder >= 0 ? '+' : '-';
    const remainderAbs = Math.abs(remainder);

    // Fix: Use proper fraction representation for remainder
    const remainderFraction =
        remainderAbs % 1 === 0
            ? remainderAbs.toString()
            : `\\frac{${Math.abs(remainder * 4)}}{4}`;

    return {
        from: `${letter}^2 ${sign1} ${b} ${letter} ${sign2} ${c}`,
        to: `\\left(${letter} ${sign1} \\frac{${b}}{2}\\right)^2 ${remainderSign} ${remainderFraction}`,
    };
}

function getFourthProblem(random: Randomizer): Problem {
    const letter = getRandomLetter(random);
    const a = random.integer(2, 5) ** 2;
    const b = random.integer(1, 20);
    const c = random.integer(1, 50);
    const sign1 = random.boolean() ? '+' : '-';
    const sign2 = random.boolean() ? '+' : '-';

    const innerCoeff = b / (2 * a);
    const remainder = c - b ** 2 / (4 * a);
    const remainderSign = remainder >= 0 ? '+' : '-';
    const remainderAbs = Math.abs(remainder);

    const innerFraction =
        innerCoeff % 1 === 0 ? innerCoeff.toString() : `\\frac{${b}}{${2 * a}}`;

    // Fix: Correct the remainder fraction calculation
    const remainderFraction =
        remainderAbs % 1 === 0
            ? remainderAbs.toString()
            : `\\frac{${Math.round(Math.abs(remainder * 4 * a))}}{${4 * a}}`;

    return {
        from: `${a}${letter}^2 ${sign1} ${b}${letter} ${sign2} ${c}`,
        to: `${a}\\left(${letter} ${sign1} ${innerFraction}\\right)^2 ${remainderSign} ${remainderFraction}`,
    };
}
