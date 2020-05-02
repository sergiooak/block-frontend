<template lang="html">
  <section id="orcamento" class="pt-12">
    <div class="container flex flex-col mx-auto">
      <h2 class="titulo text-2xl text-center text-block-400 uppercase -mt-2 mb-4">Solicite seu orçamento</h2>
      <p class="subtitulo text-lg  text-center text-block-300 mb-12 w-4/6 mx-auto font-av">Preencha o formulário abaixo com seus dados e faça a simulação de seu pedido, um de nossos representantes entrará em contato após a conclusão.</p>
      <div class="w-4/6 mx-auto">
        <Pedido />
        <Dados class="mt-8"/>
        <Entrega class="mt-8" />
      </div>
      <div class="w-4/6 mx-auto mt-6 flex items-center">
        <div class="w-4/6 alert flex bg-yellow-300 rounded-lg p-4">
          <div class="w-6 text-yellow-700 pt-1">
            <svg fill="currentColor" viewBox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          </div>
          <div class="ml-4">
            <h6 class="text-lg text-yellow-900 font-bold">Atenção</h6>
            <p class="text-yellow-800">Você precisa preencher pelo menos um telefone de contato, para poder enviar a solicitação.</p>
          </div>
        </div>
        <div class="w-2/6 flex justify-end">
          <button class="btn btn-primary">
            Enviar solicitação
          </button>
        </div>
      </div>
      <hr class="border-t-2 w-full border-block-200 mt-12"/>
    </div>
  </section>
</template>

<script>
import Dados from '~/components/home/Form/Dados.vue'
import Pedido from '~/components/home/Form/Pedido.vue'
import Entrega from '~/components/home/Form/Entrega.vue'

export default {
  components: {
    Dados,
    Pedido,
    Entrega
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="css">
  label span{
    font-family: 'al';
    font-size: 20px;
    @apply text-block-400;
  }

  .icones svg{
    padding: 5px;
    @apply w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center;
  }

  .icones h2{
    font-size: 22px;
    font-family: 'al', sans-serif;
    @apply text-center text-block-400 mt-2;
  }
</style>
