<template>
<div>
    <!-- 婚纱 -->
    <div class="content">
        <!-- 婚纱标题 -->
        <div class="Wed-title">
            <p></p>
        </div>
        <div class="Wed-dress">
            <div class="dress">
                <a>
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104833NpA8l.jpg@308w_461h_1e_1c.jpg" alt="">
                </a>
                 <div class="dress-title">秋冬苏妃(3)</div>
            </div>
            <div class="dress">
                <a>
                    <div class="dress-title">秋冬苏妃(3)</div>
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104833NpA8l.jpg@308w_461h_1e_1c.jpg" alt="">
                </a>
            </div>
            <div class="dress">
                <a>
                    <div class="dress-title">秋冬苏妃(3)</div>
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104833NpA8l.jpg@308w_461h_1e_1c.jpg" alt="">
                </a>
            </div>
            <div class="dress">
                <a>
                    <div class="dress-title">秋冬苏妃(3)</div>
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104833NpA8l.jpg@308w_461h_1e_1c.jpg" alt="">
                </a>
            </div>5
        </div>
    </div>
</div>
</template>
<style>
.content{
  width: 1188px;
  margin: 0 auto;
  }
.Wed-title{
    background: url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/dress.png) no-repeat center left;
    height: 75px;
    margin-bottom: 20px;
}
.Wed-title p{
    border-bottom: 2px solid #c6c6c6;
    padding-top: 45px;
}
.Wed-dress{
    display: inline-block;
    margin-top: 30px;
    width: 106%;
}
.dress{
    position: relative;;
    height: 400px;
    width: 23%;
    float: left;
    margin: 1%;
    overflow: hidden;
}
 .dress img{
     width: 237px;
     transition: all 1s;
}
.dress img:hover{
    transform: scale(1.1);
    cursor: pointer;
}
/*
.dress img {
    width: 220px;
    height: 220px;
    margin: 0 auto;
    background: no-repeat url(%E6%8B%9B%E5%95%86/img/arrow.gif) left top;
    -webkit-background-size: 220px 220px;
    -moz-background-size: 220px 220px;
    background-size: 220px 220px;
    -webkit-border-radius: 110px;
    border-radius: 110px;
    -webkit-transition: -webkit-transform 2s ease-out;
    -moz-transition: -moz-transform 2s ease-out;
    -o-transition: -o-transform 2s ease-out;
    -ms-transition: -ms-transform 2s ease-out;
}
.dress img:hover {
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
} */
.dress-title{
    position: absolute;
    /* top: 355px; */
    left: 70px;
    font-size: 20px;
    bottom: 0;
    font-family:"Microsoft Yahei";
}
</style>
