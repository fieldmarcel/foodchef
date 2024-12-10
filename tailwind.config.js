/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        cursive: ['Cedarville Cursive', 'cursive'],
        margarine: ['Margarine', 'cursive'],
      },
    },
  },
  plugins: [],
}
