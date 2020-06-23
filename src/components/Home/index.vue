<template>
  <div class="router clearfix">
    <Left></Left>
    <Right></Right>
  </div>
</template>

<style lang="less" scoped>
  .router{
      width: 960px;
      height: 100%;
      // background: red;
      margin: 0 auto;
      content: ".";
      margin-top: 60px;
  }

</style>

<script>
import Left from './Left'
import Right from './Right'
export default {
  components: {
    Left,
    Right
  }

}
</script>
