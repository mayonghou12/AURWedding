<template>
    <div>
        <Top></Top>
        <div class="w-960">
            <span class="bg"></span>
            <ul class="video">
                <li>
                    <h3>FILMLOUNGE&nbsp;[&nbsp;非目影像&nbsp;]&nbsp;福建站&nbsp;>></h3>
                    <p>欧若拉婚礼潮流品牌概念店全球旅拍——FILMLOUNGE [ 非目影像 ] 福建站。</p>
                    <p>FILMLOUNGE [ 非目影像 ] 是由国内资深影视广告制作人员创立的集全球旅拍婚纱照、旅拍视频、私人定制电影和环球目的地婚 礼影像的综合旅拍服务机构。下设杭州总部、青岛店及正在筹备中的成都店、上海workshop工作室。2016 / 2017 连续两年蝉联 [ 亚洲 婚礼风尚盛典 ] 年度最佳旅拍影像品牌。服务过佟大为、关悦结婚10周年旅拍，柳岩个人写真旅拍等一线影视、体育明星、网络红人、商 界领袖等。目前已拥有美国纽约 / 英国伦敦 / 法国巴黎 / 希腊圣托里尼 / 新西兰皇后镇 / 冰岛雷克雅未克 / 瑞士因特拉肯 / 捷克 布拉格 / 土耳其卡帕多西亚 / 摩洛哥马拉喀什 / 阿联酋迪拜 / 日本京都 / 印尼巴厘岛 / 泰国苏梅岛 / 美属塞班岛 / 中国香港等 成熟旅拍目的地，是国内最顶尖的同类机构之一。</p>
                </li>
                <li>
                    <h3>FILMLOUNGE&nbsp;[&nbsp;非目影像&nbsp;]&nbsp;年度宣传片&nbsp;>></h3>
                    <iframe height="530" width="100%" src="http://player.youku.com/embed/XMzEyMDI2ODI0" frameborder="0"></iframe>
                </li>
                <li>
                    <h3>FILMLOUNGE&nbsp;[&nbsp;非目影像&nbsp;]&nbsp;客片欣赏&nbsp;新西兰皇后镇&nbsp;>></h3>
                    <iframe height="530" width="100%" src="http://player.youku.com/embed/XMjk5MDk4ODc3Ng==" frameborder="0"></iframe>
                </li>
            </ul>
            <div class="line"></div>
            <ul class="photo">
                <li :key="index" v-for="(item,index) in lists">
                    <img :src="item.src" />
                </li>
            </ul>
            <div class="bottom">
                <span class="logo04"></span>
                <ul>
                    <li>
                        <router-link to="/appreciate">
                            <p></p>
                            <span class="kp"></span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/yearly">
                            <p></p>
                            <span class="year"></span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Top from '@/views/photo/top/top.vue'
export default {
  data () {
    return {
      lists: [
        {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155210xRMd7.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155205qvzCK.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155215Quww7.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155220Gz1MM.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155224lta1P.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155245EgS5j.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155249qDry1.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155253jm24U.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155201T0Pd7.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155059gfHff.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155156JBcrn.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155105ymaJz.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155125jOIi6.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155109W7tQE.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155119MOoHH.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155114aCJQ5.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155015oY644.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155004kS68K.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155009mY34F.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/154957GN0n0.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/154953wPaqm.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155021eNDy4.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/155053j5t88.jpg@142w_353h_1e_1c.jpg'
        }, {
          src: 'http://pic.tdy.picdns.com/52-0146/block/1602621374/201709/08/154948Kj7kb.jpg@142w_353h_1e_1c.jpg'
        }
      ]
    }
  },
  components: {
    Top
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
.w-960 {
    margin: 0 auto;
    padding: 50px 0;
    background: #ffffff;
    margin-bottom: 50px;
    & .bg {
        display: block;
        width: 100%;
        height: 100px;
        border-bottom: 3px solid #e0dace;
        background: url(../../assets/img/feimu.png)no-repeat center center;
    }
    & .video {
        width: 80%;
        margin: 80px auto;
        & li {
            margin-bottom: 50px;
            & h3 {
                font-size: 23px;
                margin-bottom: 20px;
                font-weight: 400;
            }
            & p {
                font-size: 16px;
                color: #666;
                line-height: 3;
                text-indent: 50px;
            }
        }
    }
    & .line {
        border-top: 2px solid #e0dace;
        padding-top: 80px;
    }
    & .photo {
        width: 95%;
        margin: 0 auto;
        zoom: 1;
        & li {
            width: 12.5%;
            float: left;
            background: #000;
            & img {
                width: 100%;
                height: auto;
                border: 0;
                vertical-align: middle;
                opacity: 1;
                transition-property: opacity;
                transition-duration: 1.5s;
            }
        }
    }
    & .photo:hover {
        & li {
            & img {
                opacity: .3;
            }
        }
        & li:hover {
            & img {
                opacity: 1;
            }
        }
    }
    & .bottom {
        margin-top: 40px;
        & span {
            display: block;
            height: 150px;
            background: url(../../assets/img/logo04.png)no-repeat center;
        }
        & ul li {
            height: 153px;
            margin-top: 40px;
            & a {
                display: block;
                color: #333;
                & p {
                    width: 60%;
                    margin: 0 auto;
                    border-top: 4px solid #e0dace;
                }
                & span {
                    display: block;
                    width: 150px;
                    height: 153px;
                    margin: 0 auto;
                    margin-top: -25px;
                    transition-property: margin-top;
                    transition-duration: .3s;
                }
                & .kp {
                    background: #fff url(../../assets/img/kepian.png) no-repeat center center;
                }
                & .year {
                    background: #fff url(../../assets/img/danqi.png) no-repeat center center;
                }
            }
            & a:hover {
                & span {
                    margin-top: -30px;
                }
            }
        }
    }
}
</style>
