export type Plural = [string, string, string];

export function pluralize(
    number: number,
    one: string,
    two: string,
    five: string,
) {
    const text = [five, one, two, two, two, five][
        number % 100 > 10 && number % 100 < 20 ? 0 : Math.min(number % 10, 5)
    ];
    return text;
}
