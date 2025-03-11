export default defineEruditConfig({
    language: 'ru',
    site: {
        buildUrl: 'https://modern-math.github.io/ru.omath.net',
        baseUrl: '/ru.omath.net/',
        title: 'Математика',
        slogan: 'Понятно и подробно',
        logotype: publicAsset('logotype.svg'),
        favicon: {
            default: publicAsset('favicon/default.svg'),
            article: publicAsset('favicon/article.svg'),
            practice: publicAsset('favicon/practice.svg'),
            summary: publicAsset('favicon/summary.svg'),
        },
        style: {
            brandColor: 'light-dark( #1879d9, #4e94d9)',
        },
    },
    seo: {
        indexTitle: 'Открытая Математика',
        indexDescription:
            'Лучшие учебники по математике! Теория, конспекты и задачник в одном флаконе.',
    },
});
