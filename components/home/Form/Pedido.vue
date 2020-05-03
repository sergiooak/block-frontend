<template lang="html">
  <div class="bg-white shadow-xl p-8 rounded-lg">
    <header class="border-b-2 border-block-200 -mx-8 -mt-6 px-8 pb-4 text-block-400 font-al"
    style="font-size: 22px;">
      Pedido
    </header>
    <main class="flex flex-col">
      <div class="flex">
        <div class="w-24 flex flex-col justify-end items-center py-4" style="margin-top: 2px;">
          <div class="icones">
            <svgViseira />
            <h2>Viseira</h2>
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-center pl-10 -mt-4">
          <form class="flex">
            <label class="-mt-2 block flex-1 mr-12">
              <span class="text-gray-700">Quantidade:</span>
              <input class="form-input mt-1 block w-full">
            </label>
            <label class="-mt-2 block flex-1 mr-4">
              <span class="text-gray-700">Valor:</span>
              <input class="form-input mt-1 block w-full">
            </label>
            <label class="-mt-2 block flex-1">
              <span class="text-gray-700">Prazo:</span>
              <input class="form-input mt-1 block w-full">
            </label>
          </form>
        </div>
      </div>
      <div class="flex border-t-2 border-gray-200 -mx-8 px-8">
        <div class="w-24 flex flex-col justify-end items-center py-4">
          <div class="icones mx-8">
            <svgMascara />
            <h2>Máscara</h2>
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-center pl-10 -mt-4">
          <form class="flex">
            <label class="-mt-2 block flex-1 mr-12">
              <span class="text-gray-700">Quantidade:</span>
              <input class="form-input mt-1 block w-full">
            </label>
            <label class="-mt-2 block flex-1 mr-4">
              <span class="text-gray-700">Valor:</span>
              <input class="form-input mt-1 block w-full">
            </label>
            <label class="-mt-2 block flex-1">
              <span class="text-gray-700">Prazo:</span>
              <input class="form-input mt-1 block w-full">
            </label>
          </form>
        </div>
      </div>
      <div class="flex border-t-2 border-gray-200 -mx-8 px-8">
        <div class="w-24 flex flex-col justify-end items-center py-4">
          <div href="#" class="icones">
            <svgCapote />
            <h2>Capote</h2>
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-center pl-10">
          <form class="flex">
            <label class="-mt-2 block flex-1 mr-12">
              <span class="text-gray-700">Quantidade:</span>
              <ticker v-model="pedido.capote.qtd" />
            </label>
            <label class="-mt-2 block flex-1 mr-4">
              <span class="text-gray-700">Prazo:</span>
              <input class="form-input mt-1 block w-full"
                :value="pedido.capote.prazo"
               readonly>
            </label>
            <label class="-mt-2 block flex-1">
              <span class="text-gray-700">Valor:</span>
              <input v-mask="'R$ ####,00'" class="form-input mt-1 block w-full"
                :value="pedido.capote.valorUnitario * pedido.capote.qtd"
               readonly>
            </label>
          </form>
        </div>
      </div>
    </main>
    <footer class="bg-block-400 border-t-2 border-block-100 -mx-8 -mb-8 py-4 px-8 rounded-b-lg flex justify-between">
      <label class="block flex items-center">
        <span class="-mt-2 text-block-100 mr-4">Prazo total estimado:</span>
        <input class="form-input w-20">
      </label>
      <label class="block flex items-center">
        <span class="-mt-2 text-block-100 mr-4">Valor total estimado:</span>
        <input class="form-input w-48">
      </label>
    </footer>
  </div>
</template>

<script>
import svgViseira from '~/components/svg/svgViseira.vue'
import svgMascara from '~/components/svg/svgMascara.vue'
import svgCapote from '~/components/svg/svgCapote.vue'

import ticker from '~/components/home/Form/ticker.vue'

export default {
  components: {
    svgViseira,
    svgMascara,
    svgCapote,
    ticker
  },
  data: function () {
    return {
      pedido:{
        viseira:{
          block:{
            valorUnitario: 34,
            pedidoMinimo: 5,
            mostrarAviso: 50,
            qtd: null,
            prazo: '5 dias úteis'
          },
          personalizada:{
            valorUnitario: 37,
            pedidoMinimo: 20,
            mostrarAviso: 100,
            qtd: null,
            prazo: '7 dias úteis'
          }
        },
        mascara:{
          valorUnitario: 3.5,
          pedidoMinimo: 50,
          mostrarAviso: 200,
          qtd: null,
          prazo: '5 dias úteis'
        },
        capote:{
          valorUnitario: 18,
          pedidoMinimo: 50,
          mostrarAviso: 100,
          qtd: null,
          prazo: '5 dias úteis'
        },
      }
    }
  },
}
</script>

<style lang="css" scoped>
</style>
