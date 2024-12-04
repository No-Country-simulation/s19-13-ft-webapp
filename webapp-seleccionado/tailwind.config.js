/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pangolin: ['Pangolin', 'cursive'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)',
      },
      height: {
        '40rem': '40rem',
      },

      colors: {
        ColorR: '#E4EBFF',
        ColorP: '#6F8DE5',
        AzulM: '#2546A5',
        GLT: 'linear-gradient(180deg, #E4EBFF 0%, #6F8DE5 100%);',
        RosadoC: '#D532D9',
        Gris: '#ECF0FE',
        blueSecondary: '#2546A5',
        blueButton: '#6F8DE5',
        whitePrimary: '#E4EBFF',
      },
      backgroundImage: {
        'custom-l': 'linear-gradient(180deg, #E4EBFF 0%, #6F8DE5 100%)',
      },
    },
  },

  plugins: [],
};
