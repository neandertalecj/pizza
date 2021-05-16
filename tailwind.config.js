module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '159': '159px',
        '191': '191px',
        '241': '241px',
      },
      borderWidth: {
        '3': '3px',
      },
      colors: {
        'gold': '#d3af7e'
      },
      backgroundImage: theme => ({
        'bgintroimage': "url('/images/me-n-eds-home-1.jpg')",
       }),
      fontFamily: {
        'roboto': ['Roboto'],
        'oswald': ['Oswald'],
      },
      fontSize: {
        xsm: '.825rem',
      },
      screen: {
        'mlg': '120px',
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
