import { wikipedia } from '#content/global-sources';

import {
    combinatorics,
    egeOk,
    matburo,
    universityMathGuide,
} from '#content/02+base-math/01-combinatorics/sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: '23. Сочетания без повторений' },
            { title: '25. Покупка пирожных' },
            { title: '26. Сочетания с повторениями' },
            { title: '27. Генуэзская лотерея' },
            { title: '28. "Спортлото"' },
            { title: 'Финальные задачи к главе II' },
        ],
    },
    {
        source: universityMathGuide,
        references: [
            { title: 'Примеры и задачи на сочетания', description: 'Глава XI' },
        ],
    },
    {
        source: matburo,
        references: [
            {
                title: 'Пример сочетаний с повторениями',
                description: 'Число сочетаний с повторениями',
                link: 'https://www.matburo.ru/tvart_sub.php?p=calc_CR',
            },
            {
                title: 'Примеры на сочетания с повторениями и без повторений',
                description: 'Основные формулы комбинаторики [PDF]',
                link: 'https://www.matburo.ru/tv/Kombinatorics_MatBuro.pdf',
            },
        ],
    },
    {
        source: wikipedia,
        references: [
            {
                title: 'Городки',
                description: 'Старинная русская спортивная игра',
                link: 'https://w.wiki/8zCR',
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
