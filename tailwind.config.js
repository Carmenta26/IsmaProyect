const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        gray: {
          50: '#28292b',
        },
        yellow: {
          600: '#AD9032',
        }
      },
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },

  },
  plugins: [],
}
