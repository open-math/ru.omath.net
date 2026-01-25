import { wikipedia } from '#content/global-sources';

import { combinatorics } from '../../sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: '5. Размещения с повторениями' },
            { title: '6. Секретный замок' },
            { title: '7. Системы счисления и передача информации' },
            { title: '8. Вокруг ЭВМ' },
            { title: '9. Морской семафор' },
            { title: '10. Точки—тире телеграфные' },
            { title: '18. Первенство по футболу' },
            { title: '19. Размещения без повторений' },
        ],
    },
    {
        source: wikipedia,
        references: [
            {
                title: 'Optical telegraph',
                description:
                    'На русскоязычной и англоязычной страницах есть разная полезная информация',
                link: 'https://w.wiki/8osA',
            },
            {
                title: 'Chappe telegraph',
                link: 'https://en.wikipedia.org/wiki/Chappe_telegraph',
            },
            {
                title: 'Telegraph code',
                link: 'https://w.wiki/8osW',
            },
            {
                title: 'Азбука Морзе',
                link: 'https://w.wiki/8osF',
            },
            {
                title: 'Композиция числа',
                link: 'https://w.wiki/8osT',
            },
        ],
    },
]);
