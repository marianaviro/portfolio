module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
       '0': '0',
       '500': '500px',
       '200':'200px',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
    },
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'courier': ['Courier', 'sans-serif'],
    },
    textColor: {
      'lilac': '#E777ED',
      'black': '#333333',
      'gray': '#D0D0D0',
      'dark-lilac': '#D477ED'
    },
    colors: {
      'lilac': '#D477ED',
      'black': '#333333',
      'gray': '#D0D0D0'
    },
    fontSize: {
       'xs': '.75rem',
       'sm': '.85rem',
       'm': '1.15rem',
       'l': '3.5rem',
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
        '98': '28rem',
        '200':'200px',
      },
      spacing: {
        'circle': '90px',
        'eye': '95px'
      },
      padding: {
        'full': '50%',
        'foot':'50px'
      },
      zIndex: {
        '-10': '-10',
      },
      inset: {
        '-90': '-90px',
        '-95': '-95px',
      },
    }
  },
  variants: {
    extend: {
      display: ['group-hover'],
      transitionProperty: ['hover', 'focus'],
      fontWeight: ['group-hover'],
      cursor: ['hover', 'focus'],
    }
  },
  plugins: [],
}
