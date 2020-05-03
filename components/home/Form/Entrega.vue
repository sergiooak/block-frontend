<template lang="html">
  <div class="bg-white shadow-xl p-8 rounded-lg">
    <header class="border-b-2 border-block-200 -mx-8 -mt-6 px-8 pb-4 text-block-400 font-al"
    style="font-size: 22px;">
      Entrega
    </header>
    <main>
      <form>
        <div class="flex justify-between">
          <label class="mt-4 block flex-1 mr-4">
            <span class="text-gray-700">CEP:</span>
            <input v-model="endereco.cep" v-mask="'#####-###'" type="text" inputmode="numeric" class="form-input mt-1 block w-full">
          </label>
          <label class="mt-4 block flex-1">
            <span class="text-gray-700">Número:</span>
            <input id="numero" v-model.number="endereco.numero" type="text" inputmode="numeric" class="form-input mt-1 block w-full">
          </label>
        </div>
        <div class="flex justify-between">
          <label class="mt-4 block flex-1">
            <span class="text-gray-700">Endereço:</span>
            <input v-model="endereco.endereco" class="form-input mt-1 block w-full">
          </label>
        </div>
        <div class="flex justify-between">
          <label class="mt-4 block flex-1 mr-4">
            <span class="text-gray-700">Bairro:</span>
            <input v-model="endereco.bairro" class="form-input mt-1 block w-full">
          </label>
          <label class="mt-4 block flex-1">
            <span class="text-gray-700">Cidade:</span>
            <div class="flex">
              <input v-model="endereco.cidade" class="form-input mt-1 block w-full rounded-r-none">
              <select v-model="endereco.estado" class="form-select mt-1 block w-24 rounded-l-none border-l-0">
                <option v-for="estado of estados" :key="estado" :value="estado">
                  {{ estado }}
                </option>
              </select>
            </div>
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
      endereco:{
        cep: '',
        numero: '',
        endereco: '',
        bairro: '',
        cidade: '',
        estado: 'MG',
      },
      estados: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'
      ]
    }
  },
  watch: {
    'endereco.cep': async function (val, oldVal) {
      if (val.length == 9) {
        let cep = val.replace('-','')
        document.querySelector('#numero').focus();

        let response = await this.$axios.$get(`https://viacep.com.br/ws/${cep}/json/`);

        this.endereco.endereco = response.logradouro;
        this.endereco.bairro = response.bairro;
        this.endereco.cidade = response.localidade;
        this.endereco.estado = response.uf;

      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
