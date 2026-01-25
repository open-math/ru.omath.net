const e=`// Instant color theme setup\r
const theme = localStorage.getItem('theme') ?? 'auto';\r
const binaryTheme =\r
    theme === 'auto'\r
        ? window.matchMedia('(prefers-color-scheme: dark)').matches\r
            ? 'dark'\r
            : 'light'\r
        : theme;\r
document.documentElement.setAttribute('data-theme', binaryTheme);\r
`;export{e as default};
