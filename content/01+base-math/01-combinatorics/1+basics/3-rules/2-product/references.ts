import {
    brilliant,
    combinatorics,
    sdamEge,
    wikipedia,
} from '#content/01+base-math/01-combinatorics/sources';

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
]);
