<template>
    <div>
        <div class="w-960">
            <div class="guonei"></div>
        </div>
        <ul>
            <li class="fl">
                <a href="#">
                    婚礼视频
                    <span>VIDEOS</span>
                </a>
            </li>
            <li class="fr">
                <a href="#">
                    婚礼图片
                    <span>PHOTOS</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
@import '~css/common.less';
.guonei {
    .background(pink);
    width: 100%;
    height: 167px;
    background: url(../../../../assets/img/guonei.png)no-repeat center left;
}
li {
    width: 48%;
    height: 85px;
    .background(#ccc);
    text-align: center;
    line-height: 85px;
    & a{
        font-size: 37px;
        color: black;
    }
}
li:hover {
    background: #d4caaf;
}
</style>
