<template>
    <div>
        <Top></Top>
        <div class="w-960">
            <div class="guard-box">
                <span>守护一生</span>
                <div class="img-box">
                    <img src="../../../assets/img/100019GSNKs.jpg" />
                    <img src="../../../assets/img/100019GSNKs.jpg" />
                    <img src="../../../assets/img/100019GSNKs.jpg" />
                    <img src="../../../assets/img/100019GSNKs.jpg" />
                    <img src="../../../assets/img/100019GSNKs.jpg" />
                </div>
                <div class="fanye">
                    <p>
                    下一篇：
                    <a>与你同在</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from '@/views/photo/top/top.vue'
export default {
  components: {
    Top
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
.w-960 {
    margin: 0 auto;
    & .guard-box {
        background: #fff;
        padding: 30px 2%;
        width: 96%;
        display: block;
        margin-bottom: 50px;
        & span {
            text-align: center;
            font-size: 35px;
            display: block;
            text-align: center;
            color: #615140;
            font-weight: 400;
            margin-bottom: 20px;
        }
        & .img-box {
            text-align: justify;
            font-size: 14px;
            display: block;
            & img {
                margin-top: 5px;
                max-width: 100%;
                margin-bottom: 5px;
            }
        }
        & .fanye {
            margin: 30px 0;
            & p {
                font-size: 15px;
                // line-height: 30px;
                word-wrap: break-word;
                & a {
                    color: #999;
                }
            }
        }
    }
}
</style>
