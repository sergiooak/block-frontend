<template>
  <main class="min-h-screen bg-gray-200">
    <Hero />
    <Videos />
    <Qualidades />
    <Form />
    <Faq />
  </main>
</template>

<script>
import Hero from '~/components/sections/home/Hero.vue'
import Videos from '~/components/sections/home/Videos.vue'
import Qualidades from '~/components/sections/home/Qualidades.vue'
import Form from '~/components/sections/home/Form.vue'
import Faq from '~/components/sections/home/Faq.vue'

export default {
  components: {
    Hero,
    Videos,
    Qualidades,
    Form,
    Faq,
  }
}
</script>
