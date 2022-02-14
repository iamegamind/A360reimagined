module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
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
