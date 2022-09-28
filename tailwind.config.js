/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baseColor':'#4262ff',
        'myYellow': '#ffc833',
        'myGreen': '#69e5ab',
        'myGreen-10': '#78e8b3',
        'myGreen-20': '#87eabc',
        'myGreen-30': '#96edc4',
        'myGreen-40': '#a5efcd',
        'kiwi': '#e7f0c0',
        'satinLinen':'#e1dacf',
        'comet':'#53596d',
        'sweetCorn':'#fbeb99',
    },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}