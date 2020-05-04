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
          <form class="flex items-center">
            <div class="flex flex-col">
              <div class="flex flex-col mb-4">
                <span class="font-al text-block-400" style="font-size: 20px;">Modelo:</span>
                <div class="flex">
                  <label class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="viseira" v-model="pedido.viseira.tipo" value="block">
                    <span class="ml-2">Block</span>
                  </label>
                  <label class="ml-6 inline-flex items-center">
                    <input type="radio" class="form-radio" name="viseira" v-model="pedido.viseira.tipo" value="personalizada">
                    <span class="ml-2">Personalizada</span>
                  </label>
                </div>
              </div>
              <label class="-mt-2 block flex-1 mr-12">
                <span class="text-gray-700">Quantidade:</span>
                <div class="flex items-center box-content mt-1">
                  <div @click="pedido.viseira.qtd--" class="cursor-pointer bg-block-400 px-2 rounded-l text-block-100 flex items-center justify-center h-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor" /></svg>
                  </div>
                  <input v-model="pedido.viseira.qtd" type="text" inputmode="numeric" class="text-center form-input block w-20 rounded-none border-l-0 border-r-0 h-12">
                  <div @click="pedido.viseira.qtd++" class="cursor-pointer bg-block-400 px-2 rounded-r text-block-100 flex items-center justify-center h-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor" /></svg>
                  </div>
                </div>
              </label>
            </div>
            <div class="flex ml-12">
              <label class="-mt-2 block flex-1 mr-4">
                <span class="text-gray-700">Prazo:</span>
                <input v-model="viseira.prazo" tabindex="-1" class="form-input mt-1 block w-full">
              </label>
              <label class="-mt-2 block flex-1">
                <span class="text-gray-700">Valor:</span>
                <input v-model="viseira.preco.formatado" tabindex="-1" class="form-input mt-1 block w-full">
              </label>
            </div>
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
              <div class="flex items-center box-content mt-1">
                <div @click="pedido.mascara.qtd--" class="cursor-pointer bg-block-400 px-2 rounded-l text-block-100 flex items-center justify-center h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor" /></svg>
                </div>
                <input v-model="pedido.mascara.qtd" type="text" inputmode="numeric" class="text-center form-input block w-20 rounded-none border-l-0 border-r-0 h-12">
                <div @click="pedido.mascara.qtd++" class="cursor-pointer bg-block-400 px-2 rounded-r text-block-100 flex items-center justify-center h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor" /></svg>
                </div>
              </div>
            </label>
            <label class="-mt-2 block flex-1 mr-4">
              <span class="text-gray-700">Prazo:</span>
              <input v-model="mascara.prazo" tabindex="-1" class="form-input mt-1 block w-full">
            </label>
            <label class="-mt-2 block flex-1">
              <span class="text-gray-700">Valor:</span>
              <input v-model="mascara.preco.formatado" tabindex="-1" class="form-input mt-1 block w-full">
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
              <div class="flex items-center box-content mt-1">
                <div @click="pedido.capote.qtd--" class="cursor-pointer bg-block-400 px-2 rounded-l text-block-100 flex items-center justify-center h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor" /></svg>
                </div>
                <input v-model="pedido.capote.qtd" type="text" inputmode="numeric" class="text-center form-input block w-20 rounded-none border-l-0 border-r-0 h-12">
                <div @click="pedido.capote.qtd++" class="cursor-pointer bg-block-400 px-2 rounded-r text-block-100 flex items-center justify-center h-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor" /></svg>
                </div>
              </div>
            </label>
            <label class="-mt-2 block flex-1 mr-4">
              <span class="text-gray-700">Prazo:</span>
              <input v-model="capote.prazo" tabindex="-1" class="form-input mt-1 block w-full">
            </label>
            <label class="-mt-2 block flex-1">
              <span class="text-gray-700">Valor:</span>
              <input v-model="capote.preco.formatado" tabindex="-1" class="form-input mt-1 block w-full">
            </label>
          </form>
        </div>
      </div>
    </main>
    <!-- <footer class="bg-block-400 border-t-2 border-block-100 -mx-8 -mb-8 py-4 px-8 rounded-b-lg flex justify-between">
      <label class="block flex items-center">
        <span class="-mt-2 text-block-100 mr-4">Prazo total estimado:</span>
        <input tabindex="-1" class="form-input w-20">
      </label>
      <label class="block flex items-center">
        <span class="-mt-2 text-block-100 mr-4">Valor total estimado:</span>
        <input tabindex="-1" class="form-input w-48" readonly>
      </label>
    </footer> -->
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
      regras:{
        viseira:{
          block:{
            valorUnitario: 34,
            pedidoMinimo: 5,
            mostrarAviso: 50,
            prazo: '5 dias úteis'
          },
          personalizada:{
            valorUnitario: 37,
            pedidoMinimo: 20,
            mostrarAviso: 100,
            prazo: '7 dias úteis'
          }
        },
        mascara:{
          valorUnitario: 3.5,
          pedidoMinimo: 50,
          mostrarAviso: 200,
          prazo: '5 dias úteis'
        },
        capote:{
          valorUnitario: 18,
          pedidoMinimo: 50,
          mostrarAviso: 100,
          prazo: '5 dias úteis'
        },
      },
      pedido:{
        viseira:{
          qtd: 0,
          tipo: 'block'
        },
        mascara:{
          qtd: 0
        },
        capote:{
          qtd: 0
        },
      }
    }
  },
  computed: {
    viseira: function () {
      let valorUnitario = this.regras.viseira.block.valorUnitario
      let prazo = this.regras.viseira.block.prazo
      if (this.pedido.viseira.tipo == "personalizada") {
        valorUnitario = this.regras.viseira.personalizada.valorUnitario
        prazo = this.regras.viseira.personalizada.prazo
      }

      let valor = this.pedido.viseira.qtd * valorUnitario
      let valorFormatado = `R$ ${parseFloat(valor).toFixed(2)}`.replace('.',',');

      if (this.pedido.viseira.qtd == 0) {
        prazo = null
        valorFormatado = null
      }

      return {
        prazo: prazo,
        preco: {
          raw: valor,
          formatado: valorFormatado
        }
      }
    },
    mascara: function () {
      let valorUnitario = this.regras.mascara.valorUnitario
      let prazo = this.regras.mascara.prazo

      let valor = this.pedido.mascara.qtd * valorUnitario
      let valorFormatado = `R$ ${parseFloat(valor).toFixed(2)}`.replace('.',',');

      if (this.pedido.mascara.qtd == 0) {
        prazo = null
        valorFormatado = null
      }

      return {
        prazo: prazo,
        preco: {
          raw: valor,
          formatado: valorFormatado
        }
      }
    },
    capote: function () {
      let valorUnitario = this.regras.capote.valorUnitario
      let prazo = this.regras.capote.prazo

      let valor = this.pedido.capote.qtd * valorUnitario
      let valorFormatado = `R$ ${parseFloat(valor).toFixed(2)}`.replace('.',',');

      if (this.pedido.capote.qtd == 0) {
        prazo = null
        valorFormatado = null
      }

      return {
        prazo: prazo,
        preco: {
          raw: valor,
          formatado: valorFormatado
        }
      }
    }
  },
  methods: {
    updateQtd(e){
      console.log(e);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
