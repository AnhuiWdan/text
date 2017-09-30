<template>
  <div class="header">
    <div class="avatar">
      <img :src="seller.avatar" alt="">
    </div>
    <div class="content">
      <h1 class="title">{{seller.name}}</h1>
      <p>{{seller.description}}</p>
      <p>{{seller.supports[0].description}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['seller']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
