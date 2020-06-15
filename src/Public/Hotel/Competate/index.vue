<template>
    <div>
        <div class="ht-c">
            <!-- 头部内容 -->
            <div class="ht-c-title">
                <h3>
                    <a href="">
                        合作酒店
                    </a>
                    <em></em>
                </h3>
            </div>
            <!-- 头部内容结束 -->
            <!-- 内容 -->
            <div class="ht-c-content">
                <!-- 左部分内容 -->
                <div class="ht-content-left">
                    <div class="ht-content-title">10</div>
                    <ul class="ht-content-img">
                       <li> <a ><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg" alt=""></a></li>
                       <li> <a ><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg" alt=""></a></li>
                       <li> <a ><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg" alt=""></a></li>
                       <li> <a ><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg" alt=""></a></li>
                       <li> <a ><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg" alt=""></a></li>
                       <li> <a ><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg" alt=""></a></li>
                    </ul>
                    <div class="ht-content-skip">
                        <div class="content-skip">
                            <span>下一篇：<a class="skip">21</a></span>
                        </div>
                    </div>
                    <!-- <div>
                        <div>
                            <div>
                            <span>下一篇:</span>
                            <a href="">21</a>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- 右部分内容 -->
                <div class="ht-content-right">
                    <div class=" ht-right-img"></div>
                    <a href=""><span class="ht-right-text">咨询婚礼顾问</span></a>
                </div>
                <!-- 内容结束 -->
            </div>
        </div>
    </div>
</template>
<style>
a{
    text-decoration: none;
}
a:hover{
    cursor: pointer;
}
.ht-c{
    width :1188px;
    margin:0 auto;
}
.ht-c-title{
    height: 111px;
    margin: 30px 0;
    background: url("http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/vs.png")no-repeat center left;
}
.ht-c-title h3{
    position: relative;
    padding-left: 480px;
    line-height: 111px;
    font-size: 25px;
    font-family: simsun;
    font-weight: bold;
    color: #5b5a5a;
}
.ht-c-title em{
    left: 158px;
    top: 80px;
    width: 421px;
    height: 0px;
    display: block;
    position: absolute;
    width: 500px;
    border-bottom: 2px solid #6b5c4c;
}
.ht-c-title h3 a{
    color: #333;
    text-decoration: none;
}
.ht-c-content{
    background: #fff;
}
.ht-content-title{
    font-size: 40px;
    line-height: 50px;
}
.ht-content-left{
    float: left;
    width: 70%;
    padding: 2%;
    background-image: linear-gradient(#e66465, #9198e5);
}
.ht-content-img img{
    width: 200px;
    margin: 30px;
    transition: all 1s;
}
.ht-content-img li{
    float: left;
}
.ht-content-img img:hover{
    transform: scale(1.1);
    cursor: pointer;
}
.ht-content-skip{
    width: 773px;
    height: 40px;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 30px;
}
.content-skip{
    float: left;
}
.skip{
    display: inline-block;
    /* float: left; */
}
.ht-content-right{
    width: 28%;
    float: right;
}
.ht-right-img{
    background:url("http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/logo03.png")no-repeat center center, linear-gradient(#9198e5,#e66465);
    height: 317px;
}
.ht-right-text{
    display: block;
    line-height: 57px;
    color: #615140;
    font-size: 18px;
    text-align: center;
    background: #e99985;
    transition: all 0.3s;
}
.ht-right-text:hover{
   background: #9198e5;
}
</style>
