module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dr-red': '#BD2F24',
        'dr-red-light': '#8A0A00',
        'dr-black': '#1C1215',
        'dr-yellow': '#F3D957'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}