<template>
  <header class="bg-transparent relative z-50">
    <div class="container mx-auto h-full flex items-center justify-between border-b-2 border-block-300">
      <div id="logoArea">
        <nuxt-link to="/">
          <img src="logo-invertida.svg" alt="Block Mascáras Hospitalares" class="h-12">
        </nuxt-link>
      </div>
      <nav class="flex">
        <div id="iconesSociais" class="flex items-center">
          <ul class="flex h-6">
            <li class="mr-4">
              <a href="#" >
                <img class="h-6" src="icons/social/whatsapp.svg" alt="WhatsApp">
              </a>
            </li>
            <li class="mr-4">
              <a href="#">
                <img class="h-6" src="icons/social/facebook.svg" alt="Facebook">
              </a>
            </li>
            <li class="mr-4">
              <a href="#">
                <img class="h-6" src="icons/social/instagram.svg" alt="Instagram">
              </a>
            </li>
            <li class="mr-16">
              <a href="#">
                <img class="h-6" src="icons/social/gmail.svg" alt="E-mail">
              </a>
            </li>
          </ul>
        </div>
        <div id="trabalheConosco">
          <nuxt-link to="/seja-parceiro" class="btn btn-white">
            <img src="icons/trabalhe-conosco.svg" class="block" style="height: 28px;">
            <span class="ml-4">Trabalhe Conosco</span>
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
