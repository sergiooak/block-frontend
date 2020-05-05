<template>
  <section>
    <div class="container mx-auto flex flex-col items-center justify-center mt-8">
      <ul class="flex flex-wrap w-10/12">
        <li class="flex w-full mb-4 md:w-1/2 animated fadeIn" style="animation-delay: .7s">
          <div class="mr-4 flex items-center justify-center border-2 border-white shadow-lg rounded-md bg-block-400 text-white w-12 h-12">
            <img src="icons/qualidades/frete.svg" style="width: 30px;">
          </div>
          <div class="flex-1">
            <h4 class="text-xl md:text-3xl text-block-400">Frete Grátis</h4>
            <p class="md:text-lg text-block-300">Para pedidos acima de 10 unidades</p>
          </div>
        </li>
        <li class="flex w-full mb-4 md:w-1/2 animated fadeIn" style="animation-delay: .8s">
          <div class="mr-4 flex items-center justify-center border-2 border-white shadow-lg rounded-md bg-block-400 text-white w-12 h-12">
            <img src="icons/qualidades/prazo.svg" style="width: 29px; margin-left: 2.5px;">
          </div>
          <div  class="flex-1">
            <h4 class="text-xl md:text-3xl text-block-400">Entrega em 5 dias úteis*</h4>
            <p class="md:text-lg text-block-300">Prazo de entrega de até cinco dias úteis<br />
              <small> *Exceto viseira personalizada (7 dias úteis)</small></p>
          </div>
        </li>
        <li class="flex w-full mb-4 md:w-1/2 md:mt-8 animated fadeIn" style="animation-delay: .9s">
          <div class="mr-4 flex items-center justify-center border-2 border-white shadow-lg rounded-md bg-block-400 text-white w-12 h-12">
            <img src="icons/qualidades/rastreamento.svg" style="height: 33px; margin-left: 2px;">
          </div>
          <div  class="flex-1">
            <h4 class="text-xl md:text-3xl text-block-400">Rastreamento de Pedido</h4>
            <p class="md:text-lg text-block-300">Acompanhe a sua entrega através do código de rastreamento</p>
          </div>
        </li>
        <li class="flex w-full md:w-1/2 md:mt-8 animated fadeIn" style="animation-delay: 1s">
          <div class="mr-4 flex items-center justify-center border-2 border-white shadow-lg rounded-md bg-block-400 text-white w-12 h-12">
            <img src="icons/qualidades/pagamento.svg" style="width: 28px;">
          </div>
          <div  class="flex-1">
            <h4 class="text-xl md:text-3xl text-block-400">Condições de Pagamento</h4>
            <p class="md:text-lg text-block-300">Consulte opções de pagamentos e descontos especiais para grande volume</p>
          </div>
        </li>
      </ul>
      <hr class="border-t-2 w-full border-block-200 mt-16"/>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  h4{
    margin-top: -8px;
    margin-bottom: 10px
  }
</style>
