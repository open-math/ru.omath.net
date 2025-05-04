import {
    brilliant,
    combinatorics,
    egeOk,
    elementaryAlgebra,
    universityMathGuide,
    wikipedia,
    yaklass,
    znanija,
} from '#content/02+base-math/01-combinatorics/sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [{ title: '24. Бином Ньютона' }],
    },
    {
        source: universityMathGuide,
        references: [
            { title: '§2. Формула Ньютона', description: 'Глава XI' },
            { title: 'Задачи к главе XI' },
        ],
    },
    {
        source: yaklass,
        references: [
            {
                title: 'Треугольник Паскаля. Бином Ньютона',
                link: 'https://www.yaklass.ru/p/algebra/11-klass/nachalnye-svedeniia-kombinatoriki-9340/treugolnik-paskalia-binom-niutona-9489',
            },
        ],
    },
    {
        source: wikipedia,
        references: [
            { title: 'Бином Ньютона', link: 'https://w.wiki/6MbF' },
            { title: 'Биномиальный коэффициент', link: 'https://w.wiki/93fn' },
            { title: 'Правило Паскаля', link: 'https://w.wiki/95qB' },
            { title: "Pascal's triangle", link: 'https://w.wiki/96RU' },
        ],
    },
    {
        source: znanija,
        references: [
            {
                title: 'Сумма коэффициентов многочлена',
                link: 'https://znanija.com/task/6877179',
            },
        ],
    },
    {
        source: brilliant,
        references: [
            {
                title: 'Binomial Theorem',
                link: 'https://brilliant.org/wiki/binomial-theorem-n-choose-k/',
            },
        ],
    },
    {
        source: elementaryAlgebra,
        references: [
            {
                title: '§4. Полиномиальная теорема',
                link: 'https://scask.ru/o_book_ela.php?id=30',
            },
        ],
    },
    {
        source: egeOk,
        references: [
            {
                title: 'Задачи по комбинаторике. Часть 2',
                description:
                    'Альтернативное решение про сумму квадратов биномиальных коэффициентов',
                link: 'https://ege-ok.ru/2015/08/21/zadachi-po-kombinatorike-chast-2',
            },
        ],
    },
]);
