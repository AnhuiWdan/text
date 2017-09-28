<template>
  <div class="child">
    <ul>
      <li v-for="item in items">
        {{item.name}} + {{item.age}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['items']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
