/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './client/**/*.{js,jsx}', './index.html'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0000a3',

          secondary: '#b68ad8',

          accent: '#f9b3e9',

          neutral: '#27242d',

          'base-100': '#332541',

          info: '#7bc9ea',

          success: '#125930',

          warning: '#fba22d',

          error: '#eb7575',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
