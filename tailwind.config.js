/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ksC1 : '#ff7618',
        ksC2 : '#010C80',
        ksC3 : '#010C80',
        ksC4 : '#303849',
        ksC5 : '#303849',
        ksC6 : '#4B91F1',
      },
      backgroundImage: theme => ({
        'contact-banner': "url('/src/assets/contact.jpg')",
      }),
    },
    fontFamily: {
      ksN: ['Nunito', 'sans-serif'],
      ksA: ['Anton', 'sans-serif'],
      ksR: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

