import { brilliant, math6, yaklass } from '#content/basics/sources';
import { wikipedia } from '#project/content/global-sources';

export default defineContentReferences([
    {
        source: brilliant,
        references: [
            {
                title: 'Fractions',
                link: 'https://brilliant.org/wiki/fractions/',
            },
        ],
    },
    {
        source: math6,
        references: [
            { title: '§7. Основное свойство дроби' },
            { title: '§8. Сокращение дробей' },
        ],
    },
    {
        source: yaklass,
        references: [
            {
                title: 'Неизвестное четвёртое число',
                description: 'Математика. 6 класс. Пропорция',
                link: 'https://www.yaklass.ru/p/matematika/6-klass/otnosheniia-proportcii-protcenty-13922/proportciia-osnovnoe-svoistvo-proportcii-13904/re-81b6bbcc-5d97-465f-a3db-e0ea0dad9df1',
            },
        ],
    },
    {
        source: wikipedia,
        references: [
            {
                title: 'Fraction',
                link: 'https://en.wikipedia.org/wiki/Fraction',
            },
            {
                title: 'Пропорция (математика)',
                link: 'https://w.wiki/AR5U',
            },
        ],
    },
]);
