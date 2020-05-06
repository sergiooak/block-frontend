
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Block Máscara Hospitalar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Produtos de alta qualidade, seguindo critérios técnicos e boas práticas de fabricação e montagem em todo o seu processo de produção.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  pwa: {
    meta: {
      theme_color: '#082B4D',
      lang: 'pt-BR'
    },
    icon: {
      purpose: 'maskable'
    },
    manifest: {
      name: 'Block Máscara Hospitalar',
      short_name: 'Block',
      lang: 'pt-BR',
      background_color: '#F7FAFC',
      theme_color: '#082B4D',
    }
  },
  /*
  ** Global CSS
  */
  css: [
    'animate.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vmask',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
