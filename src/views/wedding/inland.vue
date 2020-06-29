<template>
    <div>
        <div class="w-960">
            <Head></Head>
            <Bottom></Bottom>
        </div>
    </div>
</template>

<script>
import Head from 'views/wedding/inland/head'
import Bottom from 'views/wedding/inland/bottom'
export default {
  components: {
    Head,
    Bottom
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
.w-960 {
    margin: 0 auto;
}
</style>
