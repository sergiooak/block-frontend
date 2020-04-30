<template>
  <div id="main">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .btn{
    @apply flex items-center h-10 box-border px-4 rounded;
  }

  .btn-white{
    @apply bg-white border-b-4 border-block-100 shadow text-block-400;
  }

  .btn-outline{
    @apply h-8 box-content bg-block-400 border-2 border-white shadow text-white;
  }

  .btn-primary{
    @apply bg-block-400 border-b-4 border-block-300 shadow-lg text-white uppercase text-lg px-8 h-12;
  }
</style>
