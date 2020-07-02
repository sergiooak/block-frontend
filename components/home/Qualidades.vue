<template>

  <section class="mt-8">
    <div class="container mx-auto flex flex-col items-center justify-center mt-0 pb-4 border-b-2 border-gray-400">
      <ul class="flex flex-wrap w-10/12">
        <li class="flex w-full mb-4 md:w-1/2 animated fadeIn"
            style="animation-delay: .7s"
            v-for="qualidade in qualidades"
            :key="qualidade.id">
          <div class="mr-4 flex items-center justify-center border-2 border-white shadow-lg rounded-md bg-block-400 text-white w-12 h-12">
            <img :src="absolutePath(qualidade.Icone.url)" style="width: 30px;">
          </div>
          <div class="flex-1">
            <h4 class="text-xl md:text-3xl text-block-400">{{ qualidade.Titulo }}</h4>
            <div class="md:text-lg text-block-300" v-html="mx(qualidade.Descricao)"></div>
          </div>
        </li>
      </ul>
    </div>
  </section>

</template>

<script>

  const marked = require('marked')

  export default {
    props: ['qualidades'],
    methods: {
      absolutePath: function(url) {
        console.log('url')
        return `http://block.sergiooak.com.br${url}`
      },
      mx(str) {
        str = marked(str, { sanitize: true })
          .replace('em', 'small')
          .replace('<small', '<br /><small')
        return str
      }
    }
  }

</script>

<style lang="css" scoped>

  h4 {
    margin-top: -8px;
    margin-bottom: 10px;
  }

</style>
