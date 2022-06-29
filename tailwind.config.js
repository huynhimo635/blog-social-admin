module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  // Active dark mode on class basis
  darkMode: 'class',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  theme: {
    extend: {
      // eslint-disable-next-line no-unused-vars
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')"
      }),
      colors: {
        main_color: '#9a55ff',
        secondary_color: '#da8cff',
        main_text: '#566a7f',
        secondary_text: '#697a8d',
        main_bg: '#ffffff',
        secondary_bg: '#ebebf7',
        third_bg: '#f2f2f7'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active']
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
  future: {
    purgeLayersByDefault: true
  }
}
