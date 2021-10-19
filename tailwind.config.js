const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'header-illust': "url('/img/header-illust.png')",
        'quote-blob': "url('/img/quote-blob.svg')",
        'feat-ai-search': "url('/img/feat-ai-search.png')",
        'feat-database': "url('/img/feat-database.png')",
        'feat-social': "url('/img/feat-social.svg')",
      },
      colors: {
        common: {
          white: '#f8f8fa',
        },
        primary: {
          main: '#1e0e62',
          light: '#8c30f5',
          'light-accent': '#8229e8'
        },
        secondary: {
          main: '#a1a1b0',
          light: '#efeff6',
        },
        success: {
          main: '#004d40',
          light: '#1de9b6',
        }
      },
      height: {
        'header-img': "37.5rem"
      }
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};