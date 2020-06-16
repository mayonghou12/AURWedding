<template>
    <div>
        <div class="top">
            <div class="zhubao">
                <span class="fl margin-10-left">AURORA</span>
                <span class="fl margin-10-left square margin-10-top"></span>
                <span class="fl margin-20-left">珠宝</span>
            </div>
            <div class="text padding-10-left">
                <span>PREPARATION</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '~css/common.less';
.top {
    .size (960,70);
    & .zhubao {
        .size (960,45);
        .border-bottom (2, solid, #ddd);
        .color(#5a5a5a);
        .line-height (43);
        .font (14);
        & .square {
            .size (25,25);
            .background (#a1906a);
            .block;
        }
    }
}
.text {
    & span {
        .inline-block;
        .color(#000);
        .font(6);
        margin-top: 8px;
    }
}
</style>
