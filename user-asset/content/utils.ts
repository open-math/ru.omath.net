import type { Randomizer } from '@erudit-js/bitran-elements/problem/generator';

export function signed(value: number): string {
    return value < 0 ? value.toString() : `+${value}`;
}

export function getRandomLetter(random: Randomizer): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return random.arrayElement(letters.split(''))!;
}
