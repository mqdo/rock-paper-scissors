/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          rock: {
            400: 'hsl(349, 70%, 56%)',
            700: 'hsl(349, 71%, 52%)',
          },
          scissors: {
            400: 'hsl(40, 84%, 53%)',
            700: 'hsl(39, 89%, 49%)',
          },
          paper: {
            400: 'hsl(230, 89%, 65%)',
            700: 'hsl(230, 89%, 62%)',
          },
          lizard: {
            400: 'hsl(261, 72%, 63%)',
            700: 'hsl(261, 73%, 60%)',
          },
          spock: {
            400: 'hsl(189, 58%, 57%)',
            700: 'hsl(189, 59%, 53%)',
          },
        },
        secondary: {
          200: 'hsl(217, 16%, 45%)', // header outline
          300: 'hsl(229, 25%, 31%)', // dark text
          400: 'hsl(229, 64%, 46%)', // score text
        },
        background: {
          400: 'hsl(214, 47%, 23%)',
          700: 'hsl(237, 49%, 15%)',
        },
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        waves: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2.5)',
            opacity: '0',
          },
        },
      },
      animation: {
        'wave-1': 'waves 2.5s ease infinite',
        'wave-2': 'waves 2.5s ease .7s forwards infinite',
        'wave-3': 'waves 2.5s ease 1.3s forwards infinite',
        'wave-4': 'waves 2.5s ease 1.9s forwards infinite',
      },
    },
  },
  plugins: [],
};
