<template>
  <div id="app">
    <router-view></router-view>
    <Indexe></Indexe>
  </div>
</template>

<script>
import Indexe from '@/views/brand/index.vue'
export default {
  components: {
    Indexe
  },
  data () {
    return {
      a: 1,
      style: {
        background: 'red'
      }
    }
  }

}
</script>
