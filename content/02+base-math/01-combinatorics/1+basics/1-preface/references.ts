import { wikipedia } from '#content/global-sources';

import { combinatorics } from '#content/02+base-math/01-combinatorics/sources';

export default defineContentReferences([
    {
        source: combinatorics,
        references: [
            { title: 'Предысловие' },
            { title: '16. Проблемы комбинаторики' },
        ],
    },
    {
        source: wikipedia,
        references: [{ title: 'Кобминаторика', link: 'https://w.wiki/_vFng' }],
    },
]);
