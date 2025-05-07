import { diagramDeps, mathDeps } from '@erudit-js/bitran-elements';

export default defineEruditConfig({
    language: 'ru',
    site: {
        buildUrl: 'https://omath.ru',
        title: 'Математика',
        slogan: 'Понятно и интересно',
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
            'Современный учебник по математике — понятный, интересный, открытый. Теория, конспекты и задачник в одном флаконе.',
    },
    repository: {
        name: 'open-math/ru.omath.net',
        branch: 'main',
        sharedUrl: 'open-math/shared',
    },
    ads: {
        leftBlockId: 'R-A-2185026-3',
        bottomBlockId: 'R-A-2185026-1',
    },
    dependencies: {
        ...mathDeps,
        ...diagramDeps,
    },
});
