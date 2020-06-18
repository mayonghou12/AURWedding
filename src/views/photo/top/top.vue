<template>
    <div>
        <div class="w-960 img">
            <span></span>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '~css/common.less';
.img {
    margin: 0 auto;
    background: url(../../../assets/img/lvpai.png) no-repeat center left;
    height: 70px;
    position: relative;
    margin-top: 15px;
    margin-bottom: 20px;
    & span {
        width: 100%;
        height: 2px;
        background: #c6c6c6;
        position: absolute;
        top: 45px;
    }
}
</style>
