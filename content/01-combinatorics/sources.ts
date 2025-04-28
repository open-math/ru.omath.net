export const combinatorics = defineContentSource({
    featured: true,
    type: 'book',
    title: 'Комбинаторика',
    description:
        'Виленкин Н.Я., Виленкин А.Н., Виленкин П.А., 7-е издание, МЦНМО, 2019',
    comment:
        'Почти идеальная подача теории через жизненные примеры. Интересные задачи. Широчайший охват тем, в том числе и из высшей математики.',
});

export const olimpiadCombinatorics = defineContentSource({
    featured: true,
    type: 'book',
    title: 'Комбинаторика — олимпиаднику',
    description: 'Материалы по математике. Игорь Вячеславович Яковлев',
    comment:
        'Понятная и краткая теория. Множество задач на отработку, почти все из которых олимпиадные.',
    link: 'https://mathus.ru/math/kombinatorika.pdf',
});

export const wikipedia = defineContentSource({
    type: 'site',
    title: 'Википедия',
    description: 'Свободная энциклопедия',
    link: 'https://ru.wikipedia.org/',
});

export const sdamEge = defineContentSource({
    type: 'site',
    title: 'Сдам ГИА / Решу ЕГЭ / Решу ОГЭ',
    description:
        'Образовательный портал для подготовки к заключительным школьным экзаменам в Россиии',
    link: 'https://sdamgia.ru/',
});

export const dzen = defineContentSource({
    type: 'site',
    title: 'Дзен',
    description: 'Российская блог-плафторма',
    link: 'https://dzen.ru/',
});

export const mathHashcode = defineContentSource({
    type: 'site',
    title: 'Вопросы и ответы по Математике',
    description:
        'Форум вопросов и ответов для математиков наподобие Stack Overflow',
    link: 'http://math.hashcode.ru/',
});

export const egeMathProbability = defineContentSource({
    type: 'book',
    title: 'ЕГЭ 2020. Математика. Теория вероятностей',
    description: 'Рабочая тетрадь, Высоцкий И.Р., Ященко И.В., МЦНМО, 2020',
});

export const universityMathGuide = defineContentSource({
    type: 'book',
    title: 'Пособие по математике для поступающих в вузы',
    description:
        'Кутасов А.Д., Пиголкина Т.С., Чехлов В.И., Яковлева Т.Х., 3-е изд., 1988',
});

export const brilliant = defineContentSource({
    type: 'site',
    title: 'Brilliant',
    description: 'Образовательная платформа по математике и IT',
    comment:
        'Прекрасный сайт с наглядными пояснениями, хорошими примерами и упражнениями.',
    link: 'https://brilliant.org/',
});

export const yaklass = defineContentSource({
    type: 'site',
    title: 'ЯКласс',
    link: 'https://www.yaklass.ru/',
    description: 'Цифровой образовательный ресурс для школ',
});
