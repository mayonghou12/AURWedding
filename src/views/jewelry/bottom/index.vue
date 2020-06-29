<template>
    <div>
        <ul class="w-960">
            <li :key="index" v-for="(item, index) in typeList" class="fl">
                <router-link>
                    <img :src="item.url" />
                    <div class="zhezhao">
                        <div name="cont" class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../assets/img/logo.png" />
                                <span class="text">{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
           <!-- <li class="fl">
                <router-link to="/subpageOne">
                    <img src="../../../assets/img/110858RmMR1.jpg" />
                    <div class="zhezhao">
                        <div name="cont" class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../assets/img/logo.png" />
                                <span class="text">结婚三件套 01</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li> -->
           <!--  <li class="fl">
                <router-link to="/subpageTwo">
                    <img src="../../../assets/img/110823FZ4w3.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../assets/img/logo.png" />
                                <span class="text">结婚三件套 02</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to="/subpageThree">
                    <img src="../../../assets/img/110748smfzb.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../assets/img/logo.png" />
                                <span class="text">结婚三件套 03</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li> -->
        </ul>
    </div>
</template>

<script>

export default {
//   data () {
//     return {
//       lists: [
//         {
//           to: '/subpageOne',
//           src: '../../../assets/img/110858RmMR1.jpg',
//           title: '结婚三件套 01'
//         },
//         {
//           to: '/subpageTwo',
//           src: '../../../assets/img/110858RmMR1.jpg',
//           title: '结婚三件套 02'
//         },
//         {
//           to: '/subpageThree',
//           src: '../../../assets/img/110858RmMR1.jpg',
//           title: '结婚三件套 03'
//         }
//       ]
//     }
//   },
  computed: {
    typeList () {
      console.log(this.$store.state)
      return this.$store.state.home.typeList
    }
  },
  created () {
    this.$store.dispatch('home/actionGetJewelryList')
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
ul {
    margin: 0 auto;
    margin-top: 25px;
}

 li {
    .size(320,300);
    position: relative;
    & img {
        .size(311,290);
    }
    &:hover img {
        opacity: 0.8;
    }
    & .zhezhao {
        display: none;
        .size(311,290);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .cont{
            position: absolute;
            left: 25px;
            bottom: 92px;
            display: none;
        }
    }
    &:hover .zhezhao {
        .size(311,290);
        display: block;
        z-index: 100;
        & .cont {
            animation: move .5s forwards;
            display: block;
            .size(256, 104);
            position: absolute;
            left: 25px;
            bottom: 0px;
            .background(#cbcccc);
            .color(#a1906a);
            z-index: 999;
            & .biankuang {
                margin: 2px;
                padding: 10px;
                .size(252, 100);
                .border(1, solid, #000);
                & .logo {
                    .size(210, 50);
                    margin: 0 8px;
                    .border-bottom(4px, solid, #a1906a);
                }
                & .text {
                    margin-left: 55px;
                    .font(8);
                }
            }
        }
    }
}

@keyframes move {
    from {
        bottom:0px;
    }
    to {
        bottom:92px;
    }
}

</style>

<script>
//  export default{
//     data () {
//         return {
//             lists: [
//             {
//                 title: '结婚三件套 01',
//                 img: '../../../assets/img/110858RmMR1.jpg',
//             },
//             {
//                 title: '结婚三件套 02',
//                 img: '../../../assets/img/110823FZ4w3.jpg',
//             },
//             {
//                 title: '结婚三件套 03',
//                 img: '../../../assets/img/110748smfzb.jpg',
//             }
//         ]
//         }
//     }
// }
</script>
