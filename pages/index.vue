<template>
  <main>
    <Hero v-on:abreTelefones="mostraTelefones = true" />
    <Videos v-on:abreVideo="mostraInformacao = true" />
    <Qualidades />
    <Form />
    <Faq />

    <!-- Overlays -->
    <transition name="fade">
      <Informacao v-if="mostraInformacao" v-on:fechaOverlay="mostraInformacao = false" />
    </transition>
    <transition name="fade">
      <Telefones v-if="mostraTelefones" v-on:fechaTelefones="mostraTelefones = false" />
    </transition>
  </main>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import Videos from '~/components/home/Videos.vue'
import Qualidades from '~/components/home/Qualidades.vue'
import Form from '~/components/home/Form.vue'
import Faq from '~/components/home/Faq.vue'

import Informacao from '~/components/home/overlay/Informacao.vue'
import Telefones from '~/components/home/overlay/Telefones.vue'

export default {
  components: {
    Hero,
    Videos,
    Qualidades,
    Form,
    Faq,
    Informacao,
    Telefones
  },
  data(){
    return{
      mostraInformacao: false,
      mostraTelefones: false,
    }
  },
  methods: {

  }
}
</script>
