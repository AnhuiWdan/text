<template>
  <div id="app">
    <v-header></v-header>
    <ul class="tab-list">
      <li>
        <router-link to="/goods">商品</router-link>
      </li>
      <li>
        <router-link to="/seller">商家</router-link>
      </li>
      <li>
        <router-link to="/ratings">评价</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header'

  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    .tab-list
      display flex
      width 100%
      height 40px
      line-height: 40px
      color #333
      li
        flex: 1
        text-align center
        &>.active
          color: #f23456
</style>
