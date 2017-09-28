<template>
  <div class="sell">
    {{message}}
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        message: '你好， Vue！'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .sell
    color: #000
    font: 700 20px/26px "微软雅黑"
</style>
