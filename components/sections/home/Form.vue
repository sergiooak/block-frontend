<template lang="html">
  <section id="orcamento" class="pt-12">
    <div class="container flex flex-col mx-auto">
      <h2 class="titulo text-2xl text-center text-block-400 uppercase -mt-2 mb-4">Solicite seu orçamento</h2>
      <p class="subtitulo text-lg  text-center text-block-300 mb-12 w-4/6 mx-auto font-av">Preencha o formulário abaixo com seus dados e faça a simulação de seu pedido, um de nossos representantes entrará em contato após a conclusão.</p>
      <div class="w-4/6 mx-auto">
        <div class="bg-white shadow-xl p-4 rounded-lg">
          <header class="border-b-2 border-block-200 -mx-4 px-4 pb-4 text-block-400 font-al"
          style="font-size: 22px; margin-top: -8px;">
            Dados
          </header>
          <main>
            <form>
              <div class="flex justify-between">
                <label class="mt-4 block flex-1">
                  <span class="text-gray-700">Nome:</span>
                  <input v-model="form.dados.nome" class="form-input mt-1 block w-full">
                </label>
              </div>
              <div class="flex justify-between">
                <label class="mt-4 block flex-1 mr-4">
                  <span class="text-gray-700">Telefone Fixo:</span>
                  <input v-model="form.dados.telefone" v-mask="'(##) ####-####'" class="form-input mt-1 block w-full" placeholder="Opcional">
                </label>
                <label class="mt-4 block flex-1">
                  <span class="text-gray-700">Celular:</span>
                  <input v-model="form.dados.celular" v-mask="'(##) #####-####'" class="form-input mt-1 block w-full">
                </label>
              </div>
              <div class="flex justify-between">
                <label class="mt-4 block flex-1 mr-4">
                  <span class="text-gray-700">E-mail:</span>
                  <input v-model="form.dados.email" class="form-input mt-1 block w-full">
                </label>
                <label class="mt-4 block flex-1">
                  <span class="text-gray-700">Tipo de Pessoa:</span>
                  <select v-model="form.dados.pessoa" class="form-select mt-1 block w-full">
                    <option value="fisica">Física</option>
                    <option value="juridica">Jurídica</option>
                  </select>
                </label>
              </div>
            </form>
          </main>
        </div>
        <div class="bg-white shadow-xl p-4 rounded-lg mt-8">
          <header class="border-b-2 border-block-200 -mx-4 px-4 pb-4 text-block-400 font-al"
          style="font-size: 22px; margin-top: -8px;">
            Pedido
          </header>
          <main>
            <form>
              Em breve
            </form>
          </main>
        </div>
        <div class="bg-white shadow-xl p-4 rounded-lg mt-8">
          <header class="border-b-2 border-block-200 -mx-4 px-4 pb-4 text-block-400 font-al"
          style="font-size: 22px; margin-top: -8px;">
            Entrega
          </header>
          <main>
            <form>
              <div class="flex justify-between">
                <label class="mt-4 block flex-1 mr-4">
                  <span class="text-gray-700">CEP:</span>
                  <input v-model="form.endereco.cep" v-mask="'#####-###'" type="text" inputmode="numeric" class="form-input mt-1 block w-full">
                </label>
                <label class="mt-4 block flex-1">
                  <span class="text-gray-700">Número:</span>
                  <input id="numero" v-model.number="form.endereco.numero" type="text" inputmode="numeric" class="form-input mt-1 block w-full">
                </label>
              </div>
              <div class="flex justify-between">
                <label class="mt-4 block flex-1">
                  <span class="text-gray-700">Endereço:</span>
                  <input v-model="form.endereco.endereco" class="form-input mt-1 block w-full">
                </label>
              </div>
              <div class="flex justify-between">
                <label class="mt-4 block flex-1 mr-4">
                  <span class="text-gray-700">Bairro:</span>
                  <input v-model="form.endereco.bairro" class="form-input mt-1 block w-full">
                </label>
                <label class="mt-4 block flex-1">
                  <span class="text-gray-700">Cidade:</span>
                  <div class="flex">
                    <input v-model="form.endereco.cidade" class="form-input mt-1 block w-full rounded-r-none">
                    <select v-model="form.endereco.estado" class="form-select mt-1 block w-24 rounded-l-none border-l-0">
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="AP">AP</option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MT">MT</option>
                      <option value="MS">MS</option>
                      <option value="MG">MG</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="SE">SE</option>
                      <option value="TO">TO</option>
                    </select>
                  </div>
                </label>
              </div>
            </form>
          </main>
        </div>
      </div>
      <div class="w-4/6 mx-auto mt-6 flex items-center">
        <div class="w-4/6 alert flex bg-yellow-300 rounded-lg p-4">
          <div class="w-6 text-yellow-700 pt-1">
            <svg fill="currentColor" viewBox="0 0 20 20"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          </div>
          <div class="ml-4">
            <h6 class="text-lg text-yellow-900 font-bold">Atenção</h6>
            <p class="text-yellow-800">Você precisa preencher pelo menos um telefone de contato, para poder enviar a solicitação.</p>
          </div>
        </div>
        <div class="w-2/6 flex justify-end">
          <button class="btn btn-primary">
            Enviar solicitação
          </button>
        </div>
      </div>
      <hr class="border-t-2 w-full border-block-200 mt-12"/>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      form:{
        dados:{
          nome: '',
          telefone: '',
          celular: '',
          email: '',
          pessoa: 'fisica',
        },
        pedido:{},
        endereco:{
          cep: '',
          numero: '',
          endereco: '',
          bairro: '',
          cidade: '',
          estado: 'MG',
        }
      }
    }
  },
  watch: {
    'form.endereco.cep': async function (val, oldVal) {
      if (val.length == 9) {
        let cep = val.replace('-','')
        document.querySelector('#numero').focus();

        let response = await this.$axios.$get(`https://viacep.com.br/ws/${cep}/json/`);

        this.form.endereco.endereco = response.logradouro;
        this.form.endereco.bairro = response.bairro;
        this.form.endereco.cidade = response.localidade;
        this.form.endereco.estado = response.uf;

      }
    }
  }
}
</script>

<style lang="css">
  label span{
    font-family: 'al';
    font-size: 20px;
    @apply text-block-400;
  }
</style>
