<template lang="html">
  <div class="overlay" @click.self="fechaOverlay">
    <div class="container -ml-4 animated fadeIn" style="animation-delay: .3s;">
      <div class="w-4/6 -mt-8 mx-auto bg-gray-200 border-4 border-white rounded-lg shadow-2xl p-4 relative">
        <div class="btn-fecha absolute" @click="fechaOverlay">
          <svg fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </div>
        <main class="animated fadeIn" style="animation-delay: .9s;">
          <img src="https://via.placeholder.com/1920x1080" class="rounded">
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fechaOverlay: function () {
      this.$emit('fechaOverlay');
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
