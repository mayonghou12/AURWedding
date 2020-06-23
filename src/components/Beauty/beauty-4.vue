<template>
   <div class="beauty-coursetit cleafix">
            <img class="xngz-img" src="../../assets/img/sjcz.png" alt="">
            <div class="course01">
                <img class="course01-img" src="http://pic.tdy.picdns.com/52-0146/block/4180301099/201709/11/172308lxIMs.jpg@428w_415h_1e_1c.jpg" alt="">
                <div class="cse01">
                    <h3>独家上门彩妆服务</h3>
                    <p>任何美好的事物，都始于自信</p>
                    <span>Everything starts with confidence.</span>
                     <p>化妆不是要把你变成别人，而是展现出最迷人的你。</p>
                    <span>It’s not about changing woman, it’s about making her into her best self.</span>
                </div>
                <div class="cse01-bg"></div>
                <img class="fr" src="../../assets/img/shezx.png" alt="">
             </div>
             <div class="course02">
                <img src="../../assets/img/mzsxk.png" alt="">
                <h3>让美丽简单“化”</h3>
                <ul>
                    <li>
                        <span class="cse02-bg">
                            <p>奢想免费课程 闪电美丽妆 5分钟</p>
                        </span>
                    </li>
                    <li>
                        <span class="cse02-bg">
                            <p>奢想免费课程 闪电美丽妆 5分钟</p>
                        </span>
                    </li>
                    <li>
                        <span class="cse02-bg">
                            <p>奢想免费课程 闪电美丽妆 5分钟</p>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="course03">
                <h3>超值收费课程</h3>
                <p>可抵扣产品 浓魅大眼妆 至IN时妆集</p>
                <p>美妆大不同 萝莉养成装 派对女王妆</p>
                <h3>超值收费课程</h3>
                <p>修眉服务 <span>RMB150元</span></p>
                <p>化妆服务 <span>RMB600元</span></p>
                <p>新娘跟妆服务 <span>RMB4800元</span></p>
                <p>私家彩妆课程 <span>RMB3600元</span></p>
            </div>
        </div>
</template>

<style lang="less" scoped>
    @import "~css/common.less";
    .beauty{
        width: 960px;
        height: 100%;
        font-size: 12px;
        font-family: simsun;
        // background: red;
        margin: 0 auto;
        margin-top: 50px;
        font-weight: 400;
        // display: none;
    }
   // 私家彩妆
    .beauty-coursetit{
        width: 960px;
        height: 100%;
        // background: red;
        // display: none;
        margin: 40px auto;
    }
    .course01{
        margin: 100px 0;
        color: #4c412a;
        width: 960px;
        height: 561px;
    }
    .course01-img{
        width: 336px;
        height: 326px;
        float: left;
    }
    .cse01{
        width: 624px;
        height: 373px;
        // background: oldlace;
        float: left;
        padding-left: 20px;
    }
    .cse01 h3{
        font-size: 30px;
        margin: 40px 0;
        font-weight: 400;
    }
    .cse01 p{
        width: 605px;
        height: 50px;
        font-size: 25px;
        line-height: 50px;
    }
    .cse01 span{
        width: 605px;
        height: 24px;
        font-size: 16px;
        display: block;
        margin: 0 0 50px;
    }
    .cse01-bg{
        width: 960px;
        height: 80px;
        background: #ca9a82;
        margin: 40px 0 20px 0;
        float: left;
    }
    .course02{
        width: 960px;
        height: 416px;
        // background: olive;
    }
    .course02 h3{
        width: 730px;
        height: 39px;
        font-size:26px ;
        margin: 60px 115px 30px;
        font-weight: 400;
    }
    .course02 ul{
        width: 864px;
        height: 177px;
        margin: 0 112px;
    }
    .course02 li{
        width: 177px;
        height: 177px;
        border: 1px solid #6e5f4f;
        float: left;
        margin-right: 106px;
    }
    .cse02-bg{
        display: block;
        width: 155px;
        height: 157px;
        background: #d4caaf;
        margin: 10px;
        padding: 1px 0 0 ;
    }
    .cse02-bg p{
        width: 135px;
        height: 136px;
        color: #fff;
        font-size: 20px;
        margin: 10px;
        text-align: center;
        border: 1px solid #fff;
        padding-top: 12px;
        line-height: 1.8;
    }
    .course03{
        width: 549px;
        height: 700px;
        margin: 80px 205.5px 100px;
        padding: 120px 100px;
        background: url(../../assets/img/kuangzi3.png);
        background-size: 549px 700px;
        font-size: simsun;
    }
    .course03 h3{
        width: 349px;
        height: 45px;
        font-size: 30px;
        font-weight: 400;
        margin: 50px 0 0 ;
        font-size: simsun;
    }
    .course03 p{
        width: 349px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
    }
    .course03 span{
        margin-left:30px ;
    }
</style>
