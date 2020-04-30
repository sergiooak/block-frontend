<template lang="html">
  <section class="bg-block-400">
    <div class="container mx-auto h-64 flex items-center">
      <div class="w-1/2 mx-auto">
        <h1 class="font-bold text-center text-2xl text-block-100">
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
