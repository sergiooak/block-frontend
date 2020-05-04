<template lang="html">
  <div class="flex items-center box-content mt-1">
    <div @click="tickerQtd--" class="cursor-pointer bg-block-400 px-2 rounded-l text-block-100 flex items-center justify-center h-12">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor" /></svg>
    </div>
    <input v-model="tickerQtd" type="text" inputmode="numeric" class="text-center form-input block w-20 rounded-none border-l-0 border-r-0 h-12">
    <div @click="tickerQtd++" class="cursor-pointer bg-block-400 px-2 rounded-r text-block-100 flex items-center justify-center h-12">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor" /></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qtd: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  },
  data: function () {
    return {
      tickerQtd: this.qtd
    }
  },
  watch: {
    'tickerQtd': async function (val, oldVal) {
      this.$emit('updateQtd', this.tickerQtd);
    }
  }
}
</script>

<style lang="css" scoped>
  input:focus{
    box-shadow: none;
    border-left: 0;
    border-right: 0;
  }
</style>
