import {
    archimedesLab,
    brilliant,
    demidovich,
    mathExercises,
    mathIsFun,
    pikabu,
    wikipedia,
} from '#content/02+base-math/01-combinatorics/sources';

export default defineContentReferences([
    {
        source: brilliant,
        references: [
            {
                title: 'Factorials',
                link: 'https://brilliant.org/wiki/factorials-properties/',
            },
            {
                title: 'Trailing Number of Zeros',
                link: 'https://brilliant.org/wiki/trailing-number-of-zeros/',
            },
        ],
    },
    {
        source: wikipedia,
        references: [
            { title: 'Факториал', link: 'https://w.wiki/8AtW' },
            { title: 'Факторион', link: 'https://w.wiki/8oqC' },
            {
                title: 'Убывающие и возрастающие факториалы',
                link: 'https://w.wiki/8oqD',
            },
        ],
    },
    {
        source: mathExercises,
        references: [
            {
                title: 'Factorials and Combinatorial Expressions',
                link: 'https://www.math-exercises.com/new/combinatorics/factorials-and-combinatorial-expressions',
            },
            {
                title: 'Combinatorial Equations and Inequalities',
                link: 'https://www.math-exercises.com/combinatorics/combinatorial-equations-and-inequalities',
            },
        ],
    },
    {
        source: archimedesLab,
        references: [
            {
                title: '"Magic" Factorials',
                link: 'https://archimedes-lab.org/2018/05/23/magic-factorials/',
            },
        ],
    },
    {
        source: mathIsFun,
        references: [
            {
                title: 'Factorial Function !',
                link: 'https://www.mathsisfun.com/numbers/factorial.html',
            },
        ],
    },
    {
        source: pikabu,
        references: [
            {
                title: 'Факторионы -- что это за числа? Их всего четыре в природе⁠⁠',
                link: 'https://pikabu.ru/story/faktorionyi__chto_yeto_za_chisla__ikh_vsego_chetyire_v_prirode_8026843',
            },
        ],
    },
    {
        source: demidovich,
        references: [{ title: 'Пункт а) задачи 9' }],
    },
]);
