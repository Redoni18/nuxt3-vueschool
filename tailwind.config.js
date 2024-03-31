/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroPattern1': "url('../../assets/Hero-BackgroundPattern.svg')",
        'heroPattern2': "url('../../assets/Hero-BackgroundPattern2.svg')",
        'gradient-text': 'linear-gradient(90deg, #0BD88F 0%, #00F0FF 100%)',
        'gradient-text-secondary': 'inear-gradient(90deg, #0CD890 0%, #01F0FD 39.47%)',
        'workshop-header-gradient': 'linear-gradient(90deg, rgba(79, 8, 230, 0.5) 0%, rgba(255, 73, 117, 0.5) 96.56%)',
      },
      colors: {
        'cardBackground': '#2B2F44E5',
        'primaryWhite': '#F3F5FF',
        'mutedColor': '#737B98',
      },
      screens: {
        'xs': '375px',
        'sm': '460px',
        'md': '768px',
        'md2': '950px',
        'lg': '1200px',
        'xl': '1440px',
        '2xl': '1536px',
      },
      spacing: {
        'calc-sm': 'calc(100% + 40px)',
        'calc-lg': 'calc(100% + 135px)',
      },
    }
  },
  plugins: [],
}
