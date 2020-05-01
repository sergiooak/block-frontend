<template lang="html">
  <section>
    <div class="container mx-auto h-64 flex items-center">
      <div class="w-5/12 mx-auto">
        <h1 class="text-center text-2xl text-white font-av">
          Seja um revendedor de produtos Block em sua região!
        </h1>
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

  h1{
    font-size: 32px;
    letter-spacing: 0.03em;
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
