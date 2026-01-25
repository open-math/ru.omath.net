import { mathIsFun, wikipedia } from '#content/global-sources';

import {
    brilliant,
    elementaryAlgebra,
    kvant,
    mccme,
} from '#content/02+base-math/02-applications/sources';

export default defineContentReferences([
    {
        source: kvant,
        references: [
            {
                title: 'Суммы одинаковых степеней натуральных чисел',
                description:
                    'Абрамович В.С., Математический кружок, «Квант» №5 1973',
                link: 'https://kvant.mccme.ru/1973/05/summy_odinakovyh_stepenej_natu.htm',
            },
            {
                title: 'Доказательства без слов',
                description: 'Калейдоскоп «Кванта», «Квант» №11 2017, стр. 32',
                link: 'https://kvant.ras.ru/pdf/2017/2017-11.pdf',
            },
            {
                title: 'Числа Бернулли',
                description: 'Абрамович В.С., «Квант» №6 1974',
                link: 'https://kvant.mccme.ru/1974/06/chisla_bernulli.htm',
            },
        ],
    },
    {
        source: wikipedia,
        references: [
            { title: 'Bernoulli number', link: 'https://w.wiki/7pQQ' },
            { title: 'Формула Фаульхабера', link: 'https://w.wiki/9a4v' },
            { title: 'Треугольное число', link: 'https://w.wiki/5RVG' },
            { title: "Lazy caterer's sequence", link: 'https://w.wiki/9bfE' },
            { title: 'Задача о пушечных ядрах', link: 'https://w.wiki/9a4x' },
            { title: 'Square pyramidal number', link: 'https://w.wiki/9a4y' },
        ],
    },
    {
        source: mccme,
        references: [
            {
                title: 'Как найти сумму степеней?',
                description: 'Мерзон Г.А.',
                link: 'https://dev.mccme.ru/~merzon/pscache/bernoulli-howto-pre.pdf',
            },
            {
                title: 'Алгебра, геометрия и анализ сумм степеней последовательных чисел',
                description: 'Мерзон Г.А.',
                link: 'https://users.mccme.ru/merzon/pscache/bernoulli-mp.pdf',
            },
            {
                title: 'Суммы квадратов, суммы кубов...',
                description: 'Мерзон Г.А.',
                link: 'https://dev.mccme.ru/~merzon/pscache/bernoulli-elem-pre.html',
            },
        ],
    },
    {
        source: elementaryAlgebra,
        references: [
            {
                title: '§5. Вычисление сумм степеней первых n чисел натурального ряда',
                link: 'https://scask.ru/o_book_ela.php?id=31',
            },
        ],
    },
    {
        source: brilliant,
        references: [
            {
                title: 'Sum of n, n², or n³',
                link: 'https://brilliant.org/wiki/sum-of-n-n2-or-n3/',
            },
        ],
    },
    {
        source: mathIsFun,
        references: [
            {
                title: 'Triangular Number Sequence',
                link: 'https://www.mathsisfun.com/algebra/triangular-numbers.html',
            },
        ],
    },
]);
