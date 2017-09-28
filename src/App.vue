<template>
  <div id="app">
    <transition :items="items"></transition>
    <child :items="items"></child>
  </div>
</template>

<script type="text/ecmascript-6">
  import Transition from '@/components/transition'
  import Child from '@/components/child'

  export default {
    data () {
      return {
        items: [
          {
            name: 'tom',
            age: 12
          },
          {
            name: 'johny',
            age: 15
          },
          {
            name: 'steven',
            age: 22
          }
        ]
      }
    },
    methods: {
    },
    components: {
      Transition,
      Child
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
