<template>
  <div class="transition">
    <ul>
      <li v-for="(item, index) in items">
        <span>{{item.name}}</span>
        <span><button class="add" v-on:click="compute($event, index)">+</button>{{item.age}}<button
          class="sub" v-on:click="compute($event, index)">-</button></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['items'],
    methods: {
      compute (ev, index) {
        ev.target.className === 'add' ? this.items[index].age++ : this.items[index].age--
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  ul, li
    list-style: none
    span
      display: inline-block
      width: 120px
      height: 40px
      line-height: 40px
</style>
