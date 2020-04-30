<template>
  <main class="min-h-screen bg-gray-200">
    <HeroParceiro />
    <FormParceiro />
  </main>
</template>

<script>
import HeroParceiro from '~/components/sections/parceiro/HeroParceiro.vue'
import FormParceiro from '~/components/sections/parceiro/FormParceiro.vue'

export default {
  components: {
    HeroParceiro,
    FormParceiro
  }
}
</script>
