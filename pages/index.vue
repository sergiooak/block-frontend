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
import Hero from '~/components/sections/home/Hero.vue'
import Videos from '~/components/sections/home/Videos.vue'
import Qualidades from '~/components/sections/home/Qualidades.vue'
import Form from '~/components/sections/home/Form.vue'
import Faq from '~/components/sections/home/Faq.vue'

import Informacao from '~/components/sections/home/overlay/Informacao.vue'
import Telefones from '~/components/sections/home/overlay/Telefones.vue'

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
