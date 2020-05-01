<template lang="html">
  <section class="-mt-20 mb-16">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="mr-4 cursor-pointer transition duration-150 ease transform hover:-translate-y-2">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="https://via.placeholder.com/924x480"
                  class="imageList hidden">
          </div>
          <h3 class="text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Vídeo 3</h3>
        </div>
        <div class="mr-4 cursor-pointer transition duration-150 ease transform hover:-translate-y-2">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="https://via.placeholder.com/924x480"
                  class="imageList hidden">
          </div>
          <h3 class="text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Vídeo 3</h3>
        </div>
        <div class="mr-4 cursor-pointer transition duration-150 ease transform hover:-translate-y-2">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="https://via.placeholder.com/924x480"
                  class="imageList hidden">
          </div>
          <h3 class="text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Vídeo 3</h3>
        </div>
        <div class="cursor-pointer transition duration-150 ease transform hover:-translate-y-2">
          <div  class="w-full border-4 border-white rounded shadow-lg"
                style="min-height: 163.8px; width: 308px; background: #fff;">
            <img  src="https://via.placeholder.com/924x480"
                  class="imageList hidden">
          </div>
          <h3 class="text-center text-block-400 mt-2 uppercase animated fadeInDown"
              style="animation-delay: .5s">Vídeo 3</h3>
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

  }
}
</script>

<style lang="css" scoped>
  h3{
    font-size: 22px;
  }
</style>
