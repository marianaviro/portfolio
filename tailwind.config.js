module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'courier': ['Courier', 'sans-serif'],
    },
    textColor: {
      'lilac': '#D477ED',
      'black': '#333333'
    },
    fontSize: {
       'xs': '.75rem',
       'sm': '.85rem',
       'xl': '5rem'
    },
    minWidth: {
       '0': '0',
       '1/8': '20%',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
    },
    extend: {
      width: {
        '98': '28rem'
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover'],
      transitionProperty: ['hover', 'focus'],
      fontWeight: ['group-hover'],
    }
  },
  plugins: [],
}
