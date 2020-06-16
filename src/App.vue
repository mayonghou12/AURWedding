<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Wedding></Wedding>
    <!-- <SubpageOne></SubpageOne> -->
    <!-- <SubpageTwo></SubpageTwo> -->
  </div>
</template>

<script>
import Wedding from '@/views/wedding/index.vue'
// import SubpageOne from '@/views/jewelry/subpageOne.vue'
// import SubpageTwo from '@/views/jewelry/subpageTwo.vue'
export default {
  components: {
    Wedding
    // SubpageOne,
    // SubpageTwo
  }

}
</script>
