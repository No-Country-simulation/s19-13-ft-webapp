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
  "ColorR":"#E4EBFF",
   "ColorP":"#6F8DE5",
  "AzulM":"#2546A5",
  "GLT":"linear-gradient(180deg, #E4EBFF 0%, #6F8DE5 100%);"
},
backgroundImage :{

  "custom-l":"linear-gradient(180deg, #E4EBFF 0%, #6F8DE5 100%)"
}

    },
  },
  plugins: [],
};
/* Plantillas */




