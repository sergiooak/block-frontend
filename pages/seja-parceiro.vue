<template>
  <main>
    <HeroParceiro />
    <FormParceiro />
  </main>
</template>

<script>
import HeroParceiro from '~/components/parceiro/HeroParceiro.vue'
import FormParceiro from '~/components/parceiro/FormParceiro.vue'

export default {
  components: {
    HeroParceiro,
    FormParceiro
  }
}
</script>
