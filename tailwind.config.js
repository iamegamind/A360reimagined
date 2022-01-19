module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue LT Std', 'sans-serif'],
      },
    },
    colors: {
      'header-green': '#76c463'
    }
  },
  mode: 'jit', purge: {
    enabled: true, content: ['./src/**/*.{html,ts}']
  }
}
