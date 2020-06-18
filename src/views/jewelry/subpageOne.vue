<template>
    <div>
        <div class="content">
            <div class="w-960">
                <div class="box">
                    <a>珠宝</a>
                </div>
            </div>
            <div class="w-960 margin-15-top">
                <div class="left fl">
                    <span>结婚三件套 01</span>
                    <img src="../../assets/img/110858RmMR1.jpg" />
                    <p class="next">
                        下一篇：
                        <router-link to="/subpageTwo">
                            结婚三件套 02
                        </router-link>
                    </p>
                </div>
                <div class="right fr">
                    <div class="img"></div>
                    <a href="#">咨询婚礼顾问</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '~css/common.less';
.content {
    background: #eae9e9;
    padding: 25px;
}
.w-960 {
    margin: 0 auto;
}
.box {
    .background(pink);
    width: 100%;
    position: relative;
    height: 167px;
    background: url(../../assets/img/vs.png)no-repeat center left;
    & a{
        font-size: 25px;
        position: absolute;
        top: 66px;
        left: 480px;
        color: #5b5a5a;
    }
}
.left {
    background: #fff;
    width: 663px;
    height: 714px;
    position: relative;
    & span {
        width: 100%;
        font-size: 30px;
        font-weight: 400;
        padding: 15px;
        display: block;
    }
    & img {
        position: absolute;
        top: 88px;
        left: 105px;
    }
    & .next {
        font-size: 15px;
        position: absolute;
        bottom: 25px;
        left: 15px;
        color: #000;
        & a {
            color: #999;
        }
    }
}
.right {
    width: 269px;
    height: 257px;
    & .img{
        height: 200px;
        display: block;
        background: #fff url(../../assets/img/logo03.png)no-repeat center center;
    }
    & a {
        color: #615140;
        font-size: 18px;
        display: block;
        height: 57px;
        background: #d4caaf;
        text-align: center;
        line-height: 57px;
    }
    & a:hover {
        transform:  all 0.3s;
        background: #615140;
        color: #fff;
    }
}
</style>
