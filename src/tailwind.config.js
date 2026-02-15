/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // include your App.tsx etc
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Varela', 'ui-sans-serif', 'system-ui'],
        heading: ['Varela', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#1DA1F2',
        secondary: '#FF4081',
      },
    },
  },
  plugins: [],
};
  