import {
    brilliant,
    combinatorics,
    sdamEge,
    wikipedia,
    yaklass,
} from '#content/01-combinatorics/sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: '3. Команда космического корабля' },
            { title: '4. Правила суммы и произведения' },
        ],
    },
    {
        source: wikipedia,
        references: [
            { title: 'Комбинаторные принципы', link: 'https://w.wiki/7nJi' },
        ],
    },
    {
        source: brilliant,
        references: [
            {
                title: 'Rule of Sum',
                link: 'https://brilliant.org/wiki/rule-of-sum/',
            },
        ],
    },
    {
        source: yaklass,
        references: [
            {
                title: 'Правило суммы',
                description: 'Начальные сведения комбинаторики, 11 класс',
                link: 'https://www.yaklass.ru/p/algebra/11-klass/nachalnye-svedeniia-kombinatoriki-9340/pravilo-summy-9342',
            },
        ],
    },
    {
        source: sdamEge,
        references: [
            {
                title: 'Подсчет путей',
                description: 'Задание 13. ЕГЭ Информатика',
                link: 'https://inf-ege.sdamgia.ru/problem?id=3295',
            },
            {
                title: 'Поиск количества программ по заданному числу',
                description: 'Задание 23. ЕГЭ Информатика',
                link: 'https://inf-ege.sdamgia.ru/problem?id=5064',
            },
        ],
    },
]);
