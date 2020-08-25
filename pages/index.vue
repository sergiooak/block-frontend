<template>
  <main>
    <div id="wrapper" v-if="home">
      <Hero v-on:abreTelefones="mostraTelefones = true" :data="home" />
      <Qualidades :qualidades="home.Chamativos" />
      <Galeria v-on:abreVideo="abreVideo" :galeria="home.Galeria" />
      <Form />
    </div>
    <!-- Overlays -->
    <transition name="fade">
      <Informacao
        v-if="mostraInformacao"
        v-on:fechaOverlay="mostraInformacao = false"
        :infoId="infoId"
      />
    </transition>
    <transition name="fade">
      <Telefones
        v-if="mostraTelefones"
        v-on:fechaTelefones="mostraTelefones = false"
      />
    </transition>
  </main>
</template>

<script>
import Hero from "~/components/home/Hero.vue";
import Galeria from "~/components/home/Galeria.vue";
import Qualidades from "~/components/home/Qualidades.vue";
import Form from "~/components/home/Form.vue";

import Informacao from "~/components/home/overlay/Informacao.vue";
import Telefones from "~/components/home/overlay/Telefones.vue";

export default {
  components: {
    Hero,
    Galeria,
    Qualidades,
    Form,
    Informacao,
    Telefones
  },
  data() {
    return {
      mostraInformacao: false,
      infoId: 1,
      mostraTelefones: false,
      home: null
    };
  },
  async fetch() {
    this.home = await this.$strapi.find("home");
  },
  methods: {
    abreVideo: function(x) {
      this.mostraInformacao = true;
      this.infoId = x;
    }
  }
};
</script>
