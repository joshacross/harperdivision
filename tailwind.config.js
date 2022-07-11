module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prmi-blue': '#4F758B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}