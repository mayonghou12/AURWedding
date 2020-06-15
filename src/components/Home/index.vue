<template>
  <div class="router clearfix">
    <Left></Left>
  </div>
</template>

<style lang="less" scoped>
  .router{
      width: 960px;
      height: 800px;
      background: red;
      margin: 0 auto;
      content: ".";
      margin-top: 60px;
  }

</style>

<script>
import Left from './Left'
export default {
  components: {
    Left
  }

}
</script>
