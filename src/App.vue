<template>
  <div id="app">
    <meta name="referrer" content="no-referrer">
    <Header></Header>
    <router-view class="content"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  components: {

    Header,
    Footer
  }

}
</script>

<style>
body {
  background: #ffffff;
}
.content {
  width: 960px;
  margin: 40px auto;
}
</style>
