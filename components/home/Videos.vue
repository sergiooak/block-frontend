<template lang="html">
  <section class="mt-8 md:-mt-20 md:mb-8">
    <div class="container md:mx-auto w-full">
      <div class="flex justify-between overflow-x-scroll md:overflow-x-hidden scrollArea">
        <div class="item ml-4 md:ml-0 mr-4 cursor-pointer"
              @click="abreVideo(1)">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="fotos/1-thumb.png"
                  class="imageList hidden">
          </div>
          <h3 class="flex flex-col text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Produto Personalizado,
            <small class="text-block-300">
              com a sua marca
            </small>
          </h3>
        </div>
        <div class="item mr-4 cursor-pointer"
              @click="abreVideo(4)">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="fotos/4-thumb.png"
                  class="imageList hidden">
          </div>
          <h3 class="text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Avanço adaptado para quem usa óculos</h3>
        </div>
        <div class="item mr-4 cursor-pointer"
              @click="abreVideo(3)">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="fotos/3-thumb.png"
                  class="imageList hidden">
          </div>
          <h3 class="flex flex-col text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Viseira com 99,9% de transparencia
          </h3>
        </div>
        <div class="item pr-4 md:pr-0 cursor-pointer"
              @click="abreVideo(2)">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="fotos/2-thumb.png"
                  class="imageList hidden">
          </div>
          <h3 class="flex flex-col text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Elástico Regulável e confortável
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
    abreVideo: function (x) {
      this.$emit('abreVideo',x);
    }
  }
}
</script>

<style lang="css" scoped>
  h3{
    font-size: 22px;
  }

  .scrollArea{
    scroll-snap-type: x proximity;
  }
  .item{
    scroll-snap-align: center;
  }
</style>
