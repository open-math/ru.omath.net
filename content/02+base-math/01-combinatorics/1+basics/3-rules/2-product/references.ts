import {
    brilliant,
    combinatorics,
    rtSchool,
    sdamEge,
    wikipedia,
} from '#content/02+base-math/01-combinatorics/sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: '1. Суеверный председатель' },
            { title: '2. Лото' },
            { title: '4. Правила суммы и произведения' },
        ],
    },
    {
        source: brilliant,
        references: [
            {
                title: 'Rule of Product',
                link: 'https://brilliant.org/wiki/rule-of-product/',
            },
        ],
    },
    {
        source: wikipedia,
        references: [
            { title: 'Латинский квадрат', link: 'https://w.wiki/88rj' },
        ],
    },
    {
        source: sdamEge,
        references: [
            {
                title: 'Количество программ с обязательным этапом',
                description: 'Задание 23. ЕГЭ Информатика',
                link: 'https://inf-ege.sdamgia.ru/problem?id=11358',
            },
        ],
    },
    {
        source: rtSchool,
        references: [
            {
                title: 'Решение задач с помощью квадратных уравнений',
                description:
                    '8 класс. Квадратные уравнения. Профильный уровень',
                link: 'https://lc.rt.ru/classbook/matematika-8-klass/kvadratnye-uravneniya-profilnyi-uroven/5046',
            },
        ],
    },
]);
