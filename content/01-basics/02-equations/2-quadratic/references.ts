import { infourok, mathIsFun, mathus } from '#content/global-sources';
import {
    brilliant,
    fsu,
    libreTextsMath,
    printAndSolve,
    yaklass,
} from '#content/basics/sources';

export default defineContentReferences([
    {
        source: libreTextsMath,
        references: [
            {
                title: 'Solve Quadratic Equations Completing the Square',
                link: 'https://math.libretexts.org/Courses/City_University_of_New_York/MAT1275_Basic/07%3A_Quadratic_Equations/7.02%3A_Solve_Quadratic_Equations_Completing_the_Square',
            },
            {
                title: 'Solve Quadratic Equations Using the Quadratic Formula',
                link: 'https://math.libretexts.org/Courses/City_University_of_New_York/MAT1275_Basic/07%3A_Quadratic_Equations/7.03%3A_Solve_Quadratic_Equations_Using_the_Quadratic_Formula',
            },
        ],
    },
    {
        source: mathus,
        references: [
            {
                title: 'Замена переменной',
                link: 'https://mathus.ru/math/alguzap.pdf',
            },
        ],
    },
    {
        source: mathIsFun,
        references: [
            {
                title: 'Real World Examples of Quadratic Equations',
                link: 'https://www.mathsisfun.com/algebra/quadratic-equation-real-world.html',
            },
        ],
    },
    {
        source: brilliant,
        references: [
            {
                title: "Vieta's Formula",
                link: 'https://brilliant.org/wiki/vietas-formula/',
            },
        ],
    },
    {
        source: yaklass,
        references: [
            {
                title: 'Применение теоремы Виета',
                link: 'https://www.yaklass.ru/p/algebra/8-klass/kvadratnye-uravneniia-11021/primenenie-teoremy-vieta-9116',
            },
        ],
    },
    {
        source: infourok,
        references: [
            {
                title: 'Теорема Виета (прямая и обратная)',
                description: 'Зезетко Людмила Евгеньевна',
                link: 'https://infourok.ru/18-podgotovka-k-ekzamenu-po-matematike-teorema-vieta-pryamaya-i-obratnaya-6411836.html',
            },
        ],
    },
    {
        source: fsu,
        references: [
            {
                title: 'Тренажёр по теме "Разложение на множители с помощью формул квадрата суммы и квадрата разности"',
            },
        ],
    },
    {
        source: printAndSolve,
        references: [
            { title: 'ЕГЭ 2025. Базовый уровень. Задание 17' },
            { title: 'ОГЭ 2025. Задание 9' },
        ],
    },
]);
