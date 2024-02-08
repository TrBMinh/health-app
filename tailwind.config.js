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
      'bg-main': '#FFFFFF',
    },
    fontFamily: {},
    extend: {
      spacing: {
        13: '3.25rem',
        66: '16.5rem',
        68: '17rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      fontSize: {
        '5.5xl': '3.375rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
