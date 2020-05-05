<template lang="html">
  <div class="bg-white shadow-xl p-8 rounded-lg">
    <header class="border-b-2 border-block-200 -mx-8 -mt-6 px-8 pb-4 text-block-400 font-al"
    style="font-size: 22px;">
      Dados
    </header>
    <main>
      <form>
        <div class="flex justify-between">
          <label class="mt-4 block flex-1">
            <span class="text-gray-700">Nome:</span>
            <input v-model="dados.nome" class="form-input mt-1 block w-full">
          </label>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <label class="mt-4 block flex-1 md:mr-4">
            <span class="text-gray-700">Telefone Fixo:</span>
            <input v-model="dados.telefone" v-mask="'(##) ####-####'" class="form-input mt-1 block w-full" placeholder="Opcional">
          </label>
          <label class="mt-4 block flex-1">
            <span class="text-gray-700">Celular:</span>
            <input v-model="dados.celular" v-mask="'(##) #####-####'" class="form-input mt-1 block w-full" placeholder="(00) 00000-0000">
          </label>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <label class="mt-4 block flex-1 md:mr-4">
            <span class="text-gray-700">E-mail:</span>
            <input v-model="dados.email" class="form-input mt-1 block w-full">
          </label>
          <label class="mt-4 block flex-1">
            <span class="text-gray-700">Tipo de Pessoa:</span>
            <select v-model="dados.pessoa" class="form-select mt-1 block w-full">
              <option value="fisica">Física</option>
              <option value="juridica">Jurídica</option>
            </select>
          </label>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      dados:{
        nome: '',
        telefone: '',
        celular: '',
        email: '',
        pessoa: 'fisica',
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
