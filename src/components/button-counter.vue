<template>
  <div class="button-counter">
    <button v-on:click="incrementCounter">{{counter}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter: function () {
        this.counter += 1
        this.$emit('increment')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
