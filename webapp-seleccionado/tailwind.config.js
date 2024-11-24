/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

fontFamily:{
  Pangolin: ["Pangolin", "cursiva"],
  Roboto:["Roboto" , "sans-serif"]



},

colors:{

  "AzulM":"#2546A5"
}


    },
  },
  plugins: [],
};
