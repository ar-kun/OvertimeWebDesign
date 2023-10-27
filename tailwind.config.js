/** @type {import('tailwindcss').Config} */
module.exports = {
 important: true,
 content: ['./*.{html,js}'],
 darkMode: 'class',
 theme: {
  container: {
   center: true,
   padding: '18px',
  },
  extend: {
   colors: {
    primary: '#FAFBFA',
    secondary: '#5874A7',
    third: '#163270',
   },
   fontFamily: {
    primary: ['Jomolhari', 'serif'],
    secondary: ['jsMath-cmmi10', 'sans-serif'],
    //font-family: 'Jomolhari', serif; font-family: 'jsMath-cmmi10', sans-serif;
   },
  },
 },
 plugins: [],
};
