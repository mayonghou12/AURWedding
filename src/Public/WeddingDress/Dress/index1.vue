<template>
    <div id="#app">
        <div class="dress-c">
            <!-- 头部内容 -->
            <div class="dress-c-title">
                <h3>
                    <a href="">
                        婚纱
                    </a>
                    <em></em>
                </h3>
            </div>
            <!-- 头部内容结束 -->
            <div class="dress-content">
                <!-- 婚纱左边内容开始 -->
                <div class="content-left">
                    <div class="content-left-title"><h3>2016秋冬苏妃(2)</h3></div>
                    <!-- 图片内容 -->
                    <div class="content-left-img">
                       <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104706MmduM.jpg" alt="">
                    </div>
                    <div class="content-left-img">
                       <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104706X443H.jpg" alt="">
                    </div>
                    <!-- 翻页开始 -->
                    <div class="fanye">
                        <p>上一篇：<router-link to="/weddingd">2016秋冬苏妃(3)</router-link></p>
                        <p>下一篇：<router-link to="/weddingd2">2016春夏奈特丽(1)</router-link></p>
                    </div>
                </div>
                <!-- 婚纱右边内容开始 -->
                <div class="content-right">
                    <span class="content-right-img"></span>
                    <a href=""><span class="content-right-text">咨询婚礼顾问</span></a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import '~css/dress.css';
</style>
