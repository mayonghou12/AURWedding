<template>
    <div>
        <div class="w-960">
            <div class="guonei"></div>
        </div>
        <ul class="nav">
            <li :class="{'active': actives==1}" class="fl" @click='active(1)'>
                <router-link to="/inlandvideo">
                    婚礼视频
                    <span>VIDEOS</span>
                </router-link>
            </li>
            <li :class="{'active': actives==2}" class="fr" @click='active(2)'>
                <router-link to="/inlandphoto">
                    婚礼图片
                    <span>PHOTOS</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      actives: 2
    }
  },
  methods: {
    active (index) {
      this.actives = index
      console.log(this.actives)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
.guonei {
    .background(pink);
    width: 100%;
    height: 167px;
    background: url(../../../../assets/img/guonei.png)no-repeat center left;
}
.nav li {
    width: 48%;
    height: 85px;
    .background(#ccc);
    text-align: center;
    line-height: 85px;
    &:hover {
        background: #d4caaf;
    }
    & a{
        font-size: 37px;
        color: black;
    }
}
li.active {
    background: #d4caaf;
}
</style>
