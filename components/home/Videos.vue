<template lang="html">
  <section class="-mt-20 mb-16">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="mr-4 cursor-pointer transition duration-150 ease transform hover:-translate-y-2"
              @click="abreVideo()">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="https://via.placeholder.com/924x480&text=video%20rodando"
                  class="imageList hidden">
          </div>
          <h3 class="flex flex-col text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Viseiras Personalizadas,
            <small class="text-block-300">
              com a marca do cliente
            </small>
          </h3>
        </div>
        <div class="mr-4 cursor-pointer transition duration-150 ease transform hover:-translate-y-2"
              @click="abreVideo()">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="https://via.placeholder.com/924x480&text=video%20com%20logo"
                  class="imageList hidden">
          </div>
          <h3 class="text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Linha Block Personalizada </h3>
        </div>
        <div class="mr-4 cursor-pointer transition duration-150 ease transform hover:-translate-y-2"
              @click="abreVideo()">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="fotos/imagem_1_thumb.png"
                  class="imageList hidden">
          </div>
          <h3 class="flex flex-col text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Viseira com 99,9% de translucides.
            <small class="text-block-300">
              elástico ajustável
            </small>
          </h3>
        </div>
        <div class="cursor-pointer transition duration-150 ease transform hover:-translate-y-2"
              @click="abreVideo()">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="fotos/imagem_2_thumb.png"
                  class="imageList hidden">
          </div>
          <h3 class="flex flex-col text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Avanço adaptado para quem usa óculos
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted: function () {
    // Seleciona todas as imagens com a classe "imageList"
    let images = document.querySelectorAll('.imageList');
    images.forEach((item, i) => {
      // Verifica se a imagem já foi carregada, no caso de um hot refresh
      if (item.complete) {
        item.classList.remove("hidden");
        item.classList.add("animated", "fadeIn");
      }
      // Dispara caso a imagem carregue
      item.onload = function () {
        item.classList.remove("hidden");
        item.classList.add("animated", "fadeIn");
      };
    });
  },
  methods: {
    abreVideo: function () {
      this.$emit('abreVideo');
    }
  }
}
</script>

<style lang="css" scoped>
  h3{
    font-size: 22px;
  }
</style>
