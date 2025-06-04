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
    customLinks: [
        {
            label: 'Телеграм',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="m29.919 6.163l-4.225 19.925c-.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744l-3.106 2.988c-.344.344-.631.631-1.294.631l.463-6.556L24.919 8.72c.519-.462-.113-.719-.806-.256l-14.75 9.288l-6.35-1.988c-1.381-.431-1.406-1.381.288-2.044l24.837-9.569c1.15-.431 2.156.256 1.781 2.013z"/></svg>',
            href: 'https://t.me/omath_official',
        },
    ],
    sponsors: {
        addLink: 'https://boosty.to/omath',
        defaultCameoMessages: ['Я поддерживаю Открытую Математику!'],
        tier1Label: 'Соратник',
        tier2Label: 'Меценат',
    },
    content: {
        bookSiteTitle: true,
        howToImproveLink:
            'https://github.com/open-math/ru.omath.net/blob/main/pages/how-to-improve.md',
    },
    ads: {
        aside: {
            provider: 'yandex',
            blockId: 'R-A-2185026-3',
        },
        bottom: {
            provider: 'yandex',
            blockId: 'R-A-2185026-1',
        },
    },
    analytics: {
        yandex: {
            verification: '986ee9663b1d366b',
            metricsId: '70781320',
        },
        google: {
            verification: 'hbTull_8pcvJm4alie8PVq6-f87heZXqSGp6DVFsJPk',
            gtag: 'G-NE4S66HSF0',
        },
    },
    dependencies: {
        ...mathDeps,
        ...diagramDeps,
    },
});
