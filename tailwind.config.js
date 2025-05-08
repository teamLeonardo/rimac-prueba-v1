const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF1C44',

          'primary-content': '#ffffff',

          secondary: '#432EFF',

          'secondary-content': '#160016',

          accent: '#00ff00',

          'accent-content': '#001600',

          neutral: '#ff00ff',

          'neutral-content': '#160016',

          'base-100': '#ffffff',

          'base-200': '#dedede',

          'base-300': '#bebebe',

          'base-content': '#141938',

          info: '#0000ff',

          'info-content': '#c6dbff',

          success: '#389E0D',

          'success-content': '#001600',

          warning: '#00ff00',

          'warning-content': '#001600',

          error: '#ff0000',

          'error-content': '#160000',
        },
      },
    ],
  },
}
