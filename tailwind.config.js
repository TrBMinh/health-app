/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-300': '#FFCC21',
      'primary-400': '#FF963C',
      'primary-500': '#EA6C00',
      secondary: '#8FE9D0',
      'dark-600': '#2E2E2E',
      'dark-500': '#414141',
      gray: '#777777',
      light: '#FFFFFF',
    },
    fontFamily: {},
    extend: {
      width: {
        70: '17.5rem',
      },
      spacing: {
        13: '3.25rem',
        66: '16.5rem',
        68: '17rem',
        78: '19.5rem',
        84: '21rem',
        86: '21.5rem',
        87: '21.75rem',
        88: '22rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      fontSize: {
        '5.5xl': '3.375rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        dinner1: "url('/public/img/dinner-1.jpg')",
        'hero-pattern':
          "linear-gradient(rgba(255, 204, 33, 0.2), rgba(255, 150, 60, 0.2)), url('/public/img/dinner-1.jpg')",
      },
    },
  },
  plugins: [],
};
