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
          '200': '#C7D4E8',
          '300': '#8998B1',
          '400': '#374867',
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
