<template>
    <div>
        <div class="w-960">
            <div class="guonei"></div>
        </div>
        <ul class="nav">
            <li class="fl">
                <a>
                    婚礼视频
                    <span>VIDEOS</span>
                </a>
            </li>
            <li class="fr active">
                <a>
                    婚礼图片
                    <span>PHOTOS</span>
                </a>
            </li>
        </ul>
        <ul class="w-960 photo margin-30-top active">
            <li class="fl">
                <img src="../../../../assets/img/110858RmMR1.jpg" />
                <div class="zhezhao">
                    <div class="cont">
                        <div class="biankuang">
                            <img class="logo" src="../../../../assets/img/logo.png" />
                            <span class="text">结婚三件套 01</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="fl">
                <img src="../../../../assets/img/110823FZ4w3.jpg" />
                <div class="zhezhao">
                    <div class="cont">
                        <div class="biankuang">
                            <img class="logo" src="../../../../assets/img/logo.png" />
                            <span class="text">结婚三件套 02</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="fl">
                <img src="../../../../assets/img/110748smfzb.jpg" />
                <div class="zhezhao">
                    <div class="cont">
                        <div class="biankuang">
                            <img class="logo" src="../../../../assets/img/logo.png" />
                            <span class="text">结婚三件套 03</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="fl">
                <img src="../../../../assets/img/110858RmMR1.jpg" />
                <div class="zhezhao">
                    <div class="cont">
                        <div class="biankuang">
                            <img class="logo" src="../../../../assets/img/logo.png" />
                            <span class="text">结婚三件套 01</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="fl">
                <img src="../../../../assets/img/110823FZ4w3.jpg" />
                <div class="zhezhao">
                    <div class="cont">
                        <div class="biankuang">
                            <img class="logo" src="../../../../assets/img/logo.png" />
                            <span class="text">结婚三件套 02</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="fl">
                <img src="../../../../assets/img/110748smfzb.jpg" />
                <div class="zhezhao">
                    <div class="cont">
                        <div class="biankuang">
                            <img class="logo" src="../../../../assets/img/logo.png" />
                            <span class="text">结婚三件套 03</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="video w-960 margin-30-top">
            <li>
                <iframe height="530" width="100%" src="http://player.youku.com/embed/XMzEyMDI2ODI0" frameborder="0"></iframe>
            </li>
            <li>
                <iframe height="530" width="100%" src="http://player.youku.com/embed/XMjk5MDk4ODc3Ng==" frameborder="0"></iframe>
            </li>
        </ul>
    </div>
</template>

<script>

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
.nav li.active {
    background: #d4caaf;
}
.photo {
    display: none;
}
.photo.active {
    display: block
}
 .photo li {
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
            bottom: 0px;
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

.video {
    display: none;
}

.video.active {
    display: block;
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
