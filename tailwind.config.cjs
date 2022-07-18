/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'hw-pink': '#ED008C',
        'hw-cerulean': '#00AEEF',
        'hw-yellow-rose': '#FFF000',
        'hw-black': '#000000'
      }
    },
  },
  plugins: [],
}
