<template>
    <div>
        <Top></Top>
        <div class="w-960">
            <img src="../../../assets/img/164437KlyfL.jpg@1188w_750h_1e_1c.jpg" />
            <div class="yearly-box">
                <ul>
                    <li>
                        <img src="../../../assets/img/164553GGeXE.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164556KoiHr.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164559JwO2O.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164606ZGqwa.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164610vnPpL.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164614ukwWD.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/165112ncCu2.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164619AOEe2.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164624bVs5l.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164628DF7h9.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164632Y8DR8.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164636zEVzF.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164640bRSkq.jpg@496w_1e_1c.jpg" />
                    </li>
                    <li>
                        <img src="../../../assets/img/164645E0YCU.jpg@496w_1e_1c.jpg" />
                    </li>
                </ul>
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
    & img {
        width: 100%;
        height: auto;
    }
    & .yearly-box {
        background: #fff;
        color: #000;
        & ul {
            width: 496px;
            padding: 50px 0;
            margin-left: 20%;
            & li img {
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
