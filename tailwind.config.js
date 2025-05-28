/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ["Inter", "sans-serif"]
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'col-1': '#1F1F1F',
        'col-2': '#C4C4C4',
        'col-3': '#F2F2F2',
      },
    },
  },
  plugins: [],
}