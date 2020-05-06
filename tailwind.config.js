/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    customForms: theme => ({
      default: {
        'input, select, textarea, radio': {
          color: theme('colors.gray.900'),
          fontSize: '18px',
          transition: 'all .3s ease',
          backgroundColor: theme('colors.gray.100'),
          borderWidth: '2px',
          borderColor: theme('colors.block.200'),
          position: 'relative',
          '&:focus': {
            borderWidth: '2px !important',
            boxShadow: '0 0 0 3px rgba(55, 72, 103, 0.5)',
            borderColor: theme('colors.block.400'),
            zIndex: '+1'
          },
          '&:checked': {
            backgroundColor: theme('colors.block.300'),
          },
        }
      },
    }),
    extend: {
      colors: {
        'block': {
          '100': '#DCE8FB',
          '200': '#95ACC1',
          '300': '#4F6B87',
          '400': '#082B4D',
        }
      },
      fontFamily: {
        'sans': 'Av, sans-serif',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
