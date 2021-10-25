const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        body: ['"Baloo 2"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: (theme) => ({
        'header-illust': "url('/img/header-illust.svg')",
        'quote-blob': "url('/img/quote-brash.svg')",
        'feat-ai-search': "url('/img/feat-ai-search.svg')",
        'feat-database': "url('/img/feat-database.svg')",
        'feat-dashboard': "url('/img/feat-dashboard.svg')",
        'feat-social': "url('/img/feat-social.svg')",
        'form-def': "url('/img/form-def.svg')",
        'form-success': "url('/img/form-success.svg')"
      }),
      animation: {
        fadeOut: 'fadeOut 2s ease-in-out',
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s  ease-in-out'
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('opacity-100') },
          '100%': { backgroundColor: theme('opacity-0') }
        },
        fadeIn: {
          '0%': { backgroundColor: theme('opacity-0') },
          '100%': { backgroundColor: theme('opacity-100') }
        },
        slideIn: {
          '0%': {
            backgroundColor: theme('opacity-0'),
            transform: 'translateX(-100%)'
          },
          '100%': {
            backgroundColor: theme('opacity-100'),
            transform: 'translateX(0)'
          }
        }
      }),
      colors: {
        common: {
          white: '#f8f8fa'
        },
        primary: {
          main: '#1e0e62',
          light: '#8c30f5',
          'light-accent': '#8229e8'
        },
        secondary: {
          main: '#a1a1b0',
          light: '#f0f0f4'
        },
        success: {
          main: '#004d40',
          light: '#1de9b6',
          dark: '#ec615b'
        }
      },
      height: {
        'header-img': '37.5rem'
      }
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
