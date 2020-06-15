<template>
    <div>
        <!-- 酒店页面 -->
        <div class="content">
            <!-- 标题 -->
            <div class="hotel-title">
                <p></p>
            </div>
            <!-- body -->
            <div class="hotel-body">
                <!-- 酒店描述 -->
                <h3>福建地区（部分）</h3>
                <ul class="hotel-pub">
                    <li><a><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg@284w_208h_1e_1c.jpg" alt=""></a></li>
                    <li><a><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg@284w_208h_1e_1c.jpg" alt=""></a></li>
                    <li><a><img src="http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg@284w_208h_1e_1c.jpg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.content{
  width: 1188px;
  margin: 0 auto;
  }
.hotel-title{
    background: url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/hetel.png) no-repeat center left;
    height: 75px;
    margin-bottom: 20px;
}
.hotel-title p{
    border-bottom: 2px solid #c6c6c6;
    padding-top: 45px;
}
.hotel-body{
    padding: 50px 100px;
    border: 2px solid #a1906a;
}
.hotel-body h3{
    font-size: 33px;
    color: #666;
    font-weight: 400;
}
.hotel-pub{
    overflow: hidden;
    display: inline-block;
    clear: both;
}
.hotel-pub li{
    float: left;
    width: 28%;
    margin-right: 5%;
    margin-bottom: 2%;
    list-style: none;
}
.hotel-pub li a{
    max-width: 60%;
    max-height: 60%;
}
.hotel-pub li a img{
    transition: all 1s;
    width: 80%;
    height: auto
}
.hotel-pub li a img:hover{
    transform: scale(0.8,0.8);
    cursor: pointer;
}
</style>
