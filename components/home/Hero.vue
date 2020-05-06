<template lang="html">
  <section>
    <div class="container mx-auto h-64 mt-24 md:mt-10 flex flex-col-reverse md:flex-row md:items-center">
      <div class="md:w-1/2">
        <h1 class="mt-4 md:mt-0 text-center mx-auto text-lg text-block-100 font-av" style="max-width: 444px;">
          Produtos de alta qualidade, seguindo critérios técnicos e boas práticas de fabricação e montagem em todo o seu processo de produção.
        </h1>
        <footer class="flex flex-col-reverse md:flex-row items-center justify-center mt-8">
          <div class="btn btn-outline uppercase mt-4 md:mt-0 md:mr-4 transition duration-150 ease transform hover:scale-105"
              @click="abreTelefones()">
            Fale conosco
          </div>
          <a href="#orcamentoorcamento" class="btn btn-white uppercase transition duration-150 ease transform hover:scale-105">
            Solicite seu orçamento
          </a>
        </footer>
      </div>
      <div class="md:w-1/2 md:mt-0 flex items-center justify-center">
        <a href="#orcamento" class="icones">
          <svgViseira />
          <h2 class="animated fadeInDown" style="animation-delay: .15s;">Viseira</h2>
        </a>
        <a href="#orcamento" class="icones mx-8">
          <svgMascara />
          <h2 class="animated fadeInDown" style="animation-delay: .25s;">Máscara</h2>
        </a>
        <a href="#orcamento" class="icones">
          <svgCapote />
          <h2 class="animated fadeInDown" style="animation-delay: .35s;">Capote</h2>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import svgViseira from '~/components/svg/svgViseira.vue'
import svgMascara from '~/components/svg/svgMascara.vue'
import svgCapote from '~/components/svg/svgCapote.vue'

export default {
  components: {
    svgViseira,
    svgMascara,
    svgCapote
  },
  methods: {
    abreTelefones: function () {
      console.log('1');
      this.$emit('abreTelefones');
    }
  }
}
</script>

<style lang="css" scoped>

  section{
    min-height: 355px;
  }

  .icones svg{
    padding: 5px;
    width: 74px;
    height: 74px;
    @apply bg-white shadow-lg rounded-full flex items-center justify-center;
  }

  .icones h2{
    font-size: 20px;
    font-family: 'al', sans-serif;
    @apply text-center text-white mt-2;
  }

  @media (min-width: 768px) {
    .icones svg{
      width: 105px;
      height: 105px;
    }
    .icones h2{
      font-size: 22px;
    }
  }
</style>
