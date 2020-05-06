<template>
  <header>
    <div class="container mx-auto h-full flex items-center justify-center md:justify-between md:border-b-2 border-block-300">
      <div id="logoArea">
        <nuxt-link to="/" class="flex">
          <img src="logo-invertida.svg" alt="Block Mascáras Hospitalares" class="h-12">
          <img src="badge.svg" alt="Produto de qualidade certificada" class="h-12 ml-4 animated fadeInLeft">
        </nuxt-link>
      </div>
      <nav class="hidden md:flex">
        <div id="iconesSociais" class="flex items-center">
          <ul class="flex h-6 animated fadeInRight">
            <li class="mr-4">
              <a href="https://wa.me/5561998682121" target="_blank">
                <img class="h-6" src="icons/social/whatsapp.svg" alt="WhatsApp">
              </a>
            </li>
            <li class="mr-4">
              <a href="https://www.instagram.com/blockmascarahospitalar/" target="_blank">
                <img class="h-6" src="icons/social/instagram.svg" alt="Instagram">
              </a>
            </li>
            <li class="mr-8">
              <a href="mailto:ddd.franco@gmail.com" target="_blank">
                <img class="h-6" src="icons/social/gmail.svg" alt="E-mail">
              </a>
            </li>
          </ul>
        </div>
        <div id="trabalheConosco">
          <nuxt-link to="/seja-parceiro" class="btn btn-white transition duration-150 ease transform hover:scale-105">
            <img src="icons/trabalhe-conosco.svg" class="block" style="height: 28px;">
            <span class="ml-4">Seja um consultor Block</span>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  header{
    height: 75px;
  }
</style>
