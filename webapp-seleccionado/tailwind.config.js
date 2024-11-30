/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
    	fontFamily: {
        	pangolin: ["Pangolin", "cursive"],
      	},
      colors: {
        blueSecondary: '#2546A5',
        blueButton: '#6F8DE5',
        whitePrimary: '#E4EBFF',
        primaryCyan: "#6F8DE5",
        secondaryBlue: '#2546A5',
        purpleAccent: '#D532D9'
      },
      
    },
  },
  plugins: [],
};
