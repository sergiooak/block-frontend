<template lang="html">
  <section class="-mt-20 pb-12">
    <div class="container mx-auto">
      <div class="w-4/6 mx-auto bg-white shadow-xl p-4 rounded-lg">
        <form class="">
          <header class="border-b-2 border-block-200 -mx-4 px-4 pb-4 text-block-400 font-al"
          style="font-size: 22px; margin-top: -8px;">
            Preencha o Formulário
          </header>
          <main>
            <div class="flex justify-between">
              <label class="mt-4 block flex-1">
                <span class="text-gray-700">Nome:</span>
                <input class="form-input mt-1 block w-full">
              </label>
            </div>
            <div class="flex justify-between">
              <label class="mt-4 block flex-1 mr-4">
                <span class="text-gray-700">Telefone:</span>
                <input class="form-input mt-1 block w-full">
              </label>
              <label class="mt-4 block flex-1">
                <span class="text-gray-700">Celular:</span>
                <input class="form-input mt-1 block w-full">
              </label>
            </div>
            <div class="flex justify-between">
              <label class="mt-4 block flex-1 mr-4">
                <span class="text-gray-700">E-mail:</span>
                <input class="form-input mt-1 block w-full">
              </label>
              <label class="mt-4 block flex-1">
                <span class="text-gray-700">Tipo de Pessoa:</span>
                <select class="form-select mt-1 block w-full">
                  <option>Física</option>
                  <option>Juridica</option>
                </select>
              </label>
            </div>
            <div class="flex flex-col mt-4">
              <span class="text-gray-700 mb-2">Tem ou teve experiências com vendas na área da saúde?</span>
              <div class="flex">
                <label class="inline-flex items-center">
                  <input type="radio" class="form-radio" name="experiencia" value="1" checked>
                  <span class="ml-2">Sim</span>
                </label>
                <label class="ml-6 inline-flex items-center">
                  <input type="radio" class="form-radio" name="experiencia" value="0">
                  <span class="ml-2">Não</span>
                </label>
              </div>
            </div>
            <div class="flex flex-col mt-4">
              <span class="text-gray-700 mb-2">Público ou privado?</span>
              <div class="flex">
                <label class="inline-flex items-center">
                  <input type="radio" class="form-radio" name="setor" value="publico" checked>
                  <span class="ml-2">Público</span>
                </label>
                <label class="ml-6 inline-flex items-center">
                  <input type="radio" class="form-radio" name="setor" value="privado" checked>
                  <span class="ml-2">Privado</span>
                </label>
                <label class="ml-6 inline-flex items-center">
                  <input type="radio" class="form-radio" name="setor" value="ambos">
                  <span class="ml-2">Ambos</span>
                </label>
              </div>
            </div>
            <div class="flex justify-between">
              <label class="mt-4 block flex-1">
                <span class="text-gray-700">Cidade ou Região:</span>
                <input class="form-input mt-1 block w-full">
              </label>
            </div>
            <div class="flex justify-between">
              <label class="mt-4 block flex-1">
                <span class="text-gray-700">População estimada em sua possível área de atuação:</span>
                <input class="form-input mt-1 block w-full">
              </label>
            </div>
            <div class="flex justify-between">
              <label class="mt-4 block flex-1">
                <span class="text-gray-700">Descreva o motivo que deseja trabalhar conosco:</span>
                <textarea class="form-textarea mt-1 block w-full" rows="7"></textarea>
              </label>
            </div>
          </main>
        </form>
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
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
