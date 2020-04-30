<template lang="html">
  <section class="bg-block-400">
    <div class="container mx-auto h-64 flex items-center">
      <div class="w-1/2">
        <h1 class="font-bold text-center text-lg text-block-100">
          Produtos de alta qualidade, seguindo critérios técnicos e boas práticas de fabricação e montagem em todo o seu processo de produção.
        </h1>
        <footer class="flex items-center justify-center mt-8">
          <a href="#" class="btn btn-outline uppercase mr-4">
            Fale conosco
          </a>
          <a href="#" class="btn btn-white uppercase">
            Solicite seu orçamento
          </a>
        </footer>
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <a href="#" class="icones">
          <img src="icons/viseira.svg" alt="Simbolo de uma pessoa utilizando um 'face shield', viseira médica">
          <h2>Viseira</h2>
        </a>
        <a href="#" class="icones mx-8">
          <img src="icons/mascara.svg" alt="Simbolo de uma pessoa utilizando uma máscara hospitalar">
          <h2>Máscara</h2>
        </a>
        <a href="#" class="icones">
          <img src="icons/capote.svg" alt="Simbolo de um 'capote', jaleco médico">
          <h2>Capote</h2>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  section{
    height: 430px;
    margin-top: -75px;
    padding-top: calc(75px + 10px);
  }

  .icones img{
    padding: 5px;
    width: 105px;
    height: 105px;
    @apply bg-white shadow-lg rounded-full flex items-center justify-center;
  }

  .icones h2{
    @apply text-center text-white mt-4;
  }
</style>
