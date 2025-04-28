import {
    combinatorics,
    dzen,
    egeMathProbability,
    mathHashcode,
    olimpiadCombinatorics,
    sdamEge,
    universityMathGuide,
    wikipedia,
} from '#content/9-combinatoricss/sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: '3. Команда космического корабля' },
            {
                title: '4. Правила суммы и произведения',
                description: 'Задачи 20 и 21',
            },
        ],
    },
    {
        source: olimpiadCombinatorics,
        references: [{ title: '1. Перебор вариантв' }],
    },
    {
        source: wikipedia,
        references: [
            { title: 'Bombe', link: 'https://w.wiki/8oQL' },
            { title: 'Криптоанализ Энигмы', link: 'https://w.wiki/8oQM' },
        ],
    },
    {
        source: sdamEge,
        references: [
            {
                title: 'Слова по порядку',
                description: 'Задание 8. ЕГЭ Информатика',
                link: 'https://inf-ege.sdamgia.ru/problem?id=3193',
            },
        ],
    },
    {
        source: dzen,
        references: [
            {
                title: '«Bombe» Тьюринга, взорвавшая «Enigma»',
                description: 'Блог «Невероятные Механизмы»',
                link: 'https://dzen.ru/a/XEWR7iIiwwCu4U1h',
            },
        ],
    },
    {
        source: mathHashcode,
        references: [
            {
                title: 'Решение задачи «Повелитель делителей»',
                link: 'http://math.hashcode.ru/questions/29142/математика-натуральные-делители',
            },
        ],
    },
    {
        source: egeMathProbability,
        references: [{ title: 'Идеи задач с монетами и кубиками' }],
    },
    {
        source: universityMathGuide,
        references: [
            {
                title: 'Пример 3',
                description:
                    '1. Примеры простейших комбинаторных задач, Глава XI, стр. 301',
            },
        ],
    },
]);
