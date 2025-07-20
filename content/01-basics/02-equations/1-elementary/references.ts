import { wikipedia } from '#content/global-sources';

import {
    brilliant,
    printAndSolve,
    shestakovSimpleEquations,
} from '#content/basics/sources';

export default defineContentReferences([
    {
        source: wikipedia,
        references: [
            {
                title: 'Robert Recorde',
                description: 'Английский математик и врач',
                link: 'https://w.wiki/DhMN',
            },
            {
                title: '"Утиный тест"',
                description:
                    'Не такой уж и безобидный "шуточный" тест на очевидность происходящего',
                link: 'https://w.wiki/DwLz',
            },
        ],
    },
    {
        source: printAndSolve,
        references: [
            {
                title: 'ОГЭ 2025. Задача 9. Уравнения',
            },
            {
                title: 'ЕГЭ Базовый 2025. Задача 17. Уравнения',
            },
        ],
    },
    {
        source: shestakovSimpleEquations,
        references: [
            {
                title: 'Линейные, тривиальные квадратные и уравнения с дробями',
            },
        ],
    },
    {
        source: brilliant,
        references: [
            {
                title: 'Simple Equations',
                link: 'https://brilliant.org/wiki/solving-equations-simple/',
            },
            {
                title: 'Setting Up Equations',
                link: 'https://brilliant.org/wiki/setting-up-equations/',
            },
            {
                title: 'Linear Equations',
                link: 'https://brilliant.org/wiki/linear-equations/',
            },
        ],
    },
]);
