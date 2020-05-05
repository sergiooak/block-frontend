<template lang="html">
  <div class="overlay" @click.self="fechaTelefones()">
    <div class="container -ml-4 animated fadeIn" style="animation-delay: .3s;">
      <div class="w-10/12 md:w-1/3 -mt-8 mx-auto bg-gray-200 border-4 border-white rounded-lg shadow-2xl p-4 relative">
        <div class="btn-fecha absolute text-white" @click="fechaTelefones()">
          <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </div>
        <main class="animated fadeIn" style="animation-delay: .9s;">
          <h1 class="text-block-400 text-center text-2xl" style="line-height: .8em;">Entre em contato conosco através de um dos telefones abaixo</h1>
          <hr class="border-t-2 w-full border-block-200 mt-6 mb-4"/>
          <div class="flex flex-col items-center justify-center">
            <h2 class="text-xl text-block-400">Brasília DF:</h2>
            <a class="font-av text-lg text-block-300" href="tel:+55-61-99868-2121">(61) 99868-2121</a>
          </div>
          <div class="flex flex-col items-center justify-center mt-4 mb-2">
            <h2 class="text-xl text-block-400">Uberlândia MG:</h2>
            <a class="font-av text-lg text-block-300" href="tel:+55-34-99936-8889">(34) 99936-8889</a>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fechaTelefones: function () {
      this.$emit('fechaTelefones');
    }
  }
}
</script>

<style lang="css" scoped>
  .overlay{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(55, 72, 103, .25);
    @apply z-50 flex items-center justify-center;
  }

  .btn-fecha{
    z-index: +1;
    top: -24px;
    right: -24px;
    @apply h-12 w-12 bg-block-400 border-4 rounded-full shadow flex items-center justify-center cursor-pointer p-2 text-white;
  }
</style>
