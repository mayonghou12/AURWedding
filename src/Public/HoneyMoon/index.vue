<template>
    <div>
        <!-- title -->
        <div class="hm-content">
            <div class="hm-content-title">
                <div class="hm-title"></div>
                <div class="hm-content-p">
                    <p>新婚夫妇在婚礼结束后和爱人一起去旅游度假，作为夫妻恩爱、白头偕老的开始。新婚后这个甜蜜的的第一个月称为“蜜月”。</p>
                </div>
            </div>
            <div id="img" class="hm-content-img">
                <div class="hm-content-d" >
                    <div class="hm-content-dd">
                        <a class="hm-img1">
                            <img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/182313GvItK.jpg@772w_507h_1e_1c.jpg" alt="">
                        </a>
                    </div>
                </div>
                <div class="hm-content-d2" >
                    <div class="hm-content-dd2">
                        <a class="hm-img2">
                            <img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/182245NJ66t.jpg@772w_507h_1e_1c.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {

  }
}
</script>
<style>
.hm-content{
    width: 1188px;
    margin: 0 auto;
}
.hm-content-title{
    margin-top: 50px;
}
.hm-title{
    height: 220px;
    border-bottom: 2px solid #c3b898;
    background: url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/mitit.png) no-repeat center center;
}
.hm-content-p{
    font-size: 20px;
    color: #605343;
    margin: 30px 0;
}
.hm-content-img{
    position: relative;
}
.hm-content-d{
    position:absolute;
    overflow: hidden;
    width: 630px;
    height: 410px;
    background-image: linear-gradient(#676767,#9198e5);
}
.hm-content-dd{
    position: relative;
    overflow: hidden;
    width: 620px;
    height: 410px;
    background-image: linear-gradient(#e66465, #9198e5);
}
.hm-img1 img{
    position: absolute;
    width: 603px;
    cursor: pointer;
    left: 17px;
    transition: all 1s;
}
.hm-img1 img:hover{
    transform: scale(1.1);
}
.hm-content-d2{
    float: left;
    position: absolute;
    right: 0;
    top: 600px;
    overflow: hidden;
    width: 630px;
    height: 410px;
    margin-bottom: 100px;
    background-image: linear-gradient(#676767,#9198e5);
}
.hm-content-dd2{
    position: relative;
    overflow: hidden;
    width: 620px;
    height: 410px;
    left: 10px;
    background-image: linear-gradient(#e66465, #9198e5);
}
.hm-img2 img{
    width: 603px;
    cursor: pointer;
    left: 17px;
    transition: all 1s;
}
.hm-img2 img:hover{
    transform: scale(1.1);
}
</style>
