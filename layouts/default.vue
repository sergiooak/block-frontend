<template>
  <div id="main" class="bg-gray-200">
    <div class="bg-block-400 hero"></div>
    <Header />
    <transition name="fade">
      <nuxt class="relative z-10" />
    </transition>
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
  .hero{
    height: 430px;
    margin-bottom: -430px
  }

  #main{
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  body{
    font-family: sans-serif;
  }

  @font-face {
    font-family: 'av';
    src: url('../assets/fonts/av.woff2') format('woff2'),
        url('../assets/fonts/av.woff') format('woff');
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'al';
    src: url('../assets/fonts/al.woff2') format('woff2'),
        url('../assets/fonts/al.woff') format('woff');
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'al', sans-serif;
    line-height: 1.2em;
  }

  p{
    font-family: 'av', sans-serif;
    line-height: 1.1em;
  }

  p small{
    margin-top: -2px;
  }

  .titulo{
    font-size: 42px;
  }

  .subtitulo{
    font-size: 20px;
    line-height: 22px;
  }

  .font-av{
    font-family: 'av', sans-serif;
  }

  .font-al{
    font-family: 'al', sans-serif;
  }

  .btn{
    letter-spacing: 0.03em;
    padding-bottom: 4px;
    font-size: 18px;
    @apply cursor-pointer flex items-center h-10 box-content px-6 rounded font-al uppercase;
  }

  .btn img{
    margin-bottom: -4px;
  }

  .btn-white{
    @apply bg-white border-b-4 border-block-100 shadow text-block-400;
  }

  .btn-outline{
    padding-bottom: 6px;
    @apply h-8 bg-block-400 border-2 border-white shadow text-white;
  }

  .btn-primary{
    @apply bg-block-400 border-b-4 border-block-300 shadow-lg text-white uppercase text-lg px-8 h-12;
  }
</style>
