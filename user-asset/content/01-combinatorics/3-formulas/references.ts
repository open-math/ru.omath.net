import { combinatorics, dxdy, egeOk } from '../sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: '30. Перестановки с ограничениями' },
            { title: '31. Постройка лестницы' },
            { title: '32. Рыцари короля Артура' },
            { title: 'Финальные задачи к главе II' },
        ],
    },
    {
        source: dxdy,
        references: [
            {
                title: 'Задача про выбор книг на полке',
                description:
                    'Взял отличные альтернативные условия задачи от пользователя "gris"',
                link: 'https://dxdy.ru/topic48212.html',
            },
        ],
    },
    {
        source: egeOk,
        references: [
            {
                title: 'Задачи по комбинаторике. Часть 1',
                link: 'https://ege-ok.ru/2015/08/20/zadachi-po-kombinatorike',
            },
            {
                title: 'Задачи по комбинаторике. Часть 2',
                link: 'https://ege-ok.ru/2015/08/21/zadachi-po-kombinatorike-chast-2',
            },
        ],
    },
]);
