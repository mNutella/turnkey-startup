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
        'header-blob': "url('/img/header-blob.svg')",
        'quote-blob': "url('/img/quote-blob.svg')",
        'cta-rectangle': "url('/img/cta-rectangle.svg')",
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