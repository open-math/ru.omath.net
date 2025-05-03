import {
    brilliant,
    combinatorics,
    dzen,
    lindaHallLibrary,
    mentalFloss,
    universityMathGuide,
    wikipedia,
    yaklass,
} from '#content/01+base-math/01-combinatorics/sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: '20. Перестановки' },
            { title: '21. Лингвистические проблемы' },
            { title: '22. Перестановки с повторениями' },
            { title: '153. Анаграммы' },
        ],
    },
    {
        source: wikipedia,
        references: [
            { title: 'Кольца Сатурна', link: 'https://w.wiki/8oRx' },
            { title: 'Анаграмма', link: 'https://w.wiki/8mJQ' },
        ],
    },
    {
        source: brilliant,
        references: [
            {
                title: 'Permutations',
                link: 'https://brilliant.org/wiki/permutations/',
            },
            {
                title: 'Permutations with Repetition',
                link: 'https://brilliant.org/wiki/permutations-with-repetition/',
            },
        ],
    },
    {
        source: dzen,
        references: [
            {
                title: 'Загадки Галилея и их креативные разгадки Кеплером',
                description: 'Блог "Книгсовет"',
                link: 'https://dzen.ru/a/YUL8isSqKldyJTgO',
            },
        ],
    },
    {
        source: lindaHallLibrary,
        references: [
            {
                title: 'Christiaan Huygens',
                description: 'Scientist of the Day',
                link: 'https://www.lindahall.org/about/news/scientist-of-the-day/christiaan-huygens-2/',
            },
        ],
    },
    {
        source: mentalFloss,
        references: [
            {
                title: 'How A Misinterpreted Anagram Predicted The Moons of Mars',
                description: 'Paul Anthony Jones',
                link: 'https://www.mentalfloss.com/article/87433/how-misinterpreted-anagram-predicted-moons-mars',
            },
        ],
    },
    {
        source: yaklass,
        references: [
            {
                title: 'Перестановки. Перестановки без повторений',
                description: 'Начальные сведения комбинаторики, 11 класс',
                link: 'https://www.yaklass.ru/p/algebra/11-klass/nachalnye-svedeniia-kombinatoriki-9340/perestanovki-perestanovki-bez-povtorenii-9343',
            },
        ],
    },
    {
        source: universityMathGuide,
        references: [
            {
                title: 'Примеры и задачи на перестановки',
                description: 'Глава XI',
            },
        ],
    },
]);
