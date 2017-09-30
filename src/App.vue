<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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

  const ERRNO = 0

  export default {
    data () {
      return {
        seller: Object
      }
    },
    mounted () {
      this.$http.get('api/seller').then(response => {
        if (response.data.errno === ERRNO) {
          this.seller = response.data.data
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin"

  #app
    .tab-list
      display flex
      width 100%
      height 40px
      line-height: 40px
      color rgb(77, 85, 93)
      font-size 14px
      border-1px(rgba(7, 17, 27, 0.1))
      li
        flex: 1
        text-align center
        a
          display block
        & > .active
          color rgb(240, 20, 20)
</style>
