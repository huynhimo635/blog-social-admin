module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    important: true,
    // Active dark mode on class basis
    darkMode: "class",
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    theme: {
        extend: {
            // eslint-disable-next-line no-unused-vars
            backgroundImage: (theme) => ({
                check: "url('/icons/check.svg')",
                landscape: "url('/images/landscape/2.jpg')",
            }),
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
        },
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true,
    },
};