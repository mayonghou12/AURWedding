<template>
    <div>
        <div class="content">
            <Head></Head>
            <Bottom></Bottom>
        </div>
    </div>
</template>

<script>
import Head from 'views/jewelry/head'
import Bottom from 'views/jewelry/bottom'
export default {
  components: {
    Head,
    Bottom
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
.content {
    width: 960px;
    margin: 0 auto;
}
</style>
