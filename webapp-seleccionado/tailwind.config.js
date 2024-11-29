/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueSecondary: '#2546A5',
        blueButton: '#6F8DE5',
        whitePrimary: '#E4EBFF',
      },
    },
  },
  plugins: [],
};
