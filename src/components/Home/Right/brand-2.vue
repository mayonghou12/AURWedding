<template>
  <div>
      <div class="router">
        <div class="about-title">
        <div class="about-left1">
        <div class="about-img">
            <img src="http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/pinp2.png">
        </div>
         <ul class="about-left-ul">
            <li class="about-left-li">
            <router-link to="brandfive">企业介绍</router-link>
            </li>
            <li class="about-left-li">
                <span>Brand</span>
                <router-link to="brandsix">品牌文化</router-link>
            </li>
            <li class="about-left-li">
                <span>Service</span>
                <router-link to="brandone">服务内容</router-link>
            </li>
            <li class="about-left-li">
                <span>Our Team</span>
                <router-link to="brandtwo">团队展示</router-link>
            </li>
            <li class="about-left-li">
                <span>Recruit</span>
                <router-link to="brandthree">招贤纳士</router-link>
            </li>
            <li class="about-left-li">
                <span>Contact</span>
                <router-link to="brandfor">联系我们</router-link>
            </li>
      </ul>
        </div>
    </div>

    <div class="about-03 cleafix">
        <img class="td-img" src="../../../assets/img/tdzs.png" alt="">
        <div class="tdzs">
            <img class="fl" src="http://pic.tdy.picdns.com/52-0146/block/3183914711/201709/08/120851eunpP.jpg@500w_600h_1e_1c.jpg" alt="">
            <img class="fr" src="http://pic.tdy.picdns.com/52-0146/block/3183914711/201709/08/120901NpiC3.jpg@500w_600h_1e_1c.jpg" alt="">
            <img class="fl" src="http://pic.tdy.picdns.com/52-0146/block/3183914711/201709/08/120905FTkc3.jpg@500w_600h_1e_1c.jpg" alt="">
            <img class="fr" src="http://pic.tdy.picdns.com/52-0146/block/3183914711/201709/08/120915gNuRx.jpg@500w_600h_1e_1c.jpg" alt="">
        </div>
    </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
      .margin-20-bottom{
        margin-bottom: 20px;
    }
    .p-10-l{
        padding-left: 10px;
    }
    .font-14{
        font-size: 14px;
    }
    .font-12{
        font-size: 12px;
    }
.router{
    // display: none;x
    width: 960px;
    // height: 1600px;
    margin: 40px auto;
    content: ".";
    // margin-top: 60px;
    // margin-right: 30px;
    font-size: 14px;
    font-family: '微软雅黑';
    // margin-left: 50px;
    // background: red;
}
// @import "~css/common.less";
  a{ text-decoration:none}
// 品牌主页面
  .about-title {
    //   display: none;
      font-family:"微软雅黑,宋体";
      // background: chartreuse;
      height: 100%;
      width: 240px;
      float: left;
  }
  .about-left1{
    // display: none;
  }
  .about-img img{
      width: 240px;
      height: 240px;
  }
  .about-left-ul{
      width: 100%;
      // height: 100%;
  }
  .about-left-li {
    padding-top: 15px;
    margin-top: -10px;
    &:hover {
      & a,span{
      color: #c5a346;
     }
    }
  }
  .about-left-li a{
      margin: 40px 0 50px;
      width: 240px;
      height: 50px;
      margin-top: 40px;
      color: #615140;
      float: left;
      font-size: 33px;
      font-family:"微软雅黑,宋体";
      text-align: center;
      line-height: 30px;
      border-bottom: 2px solid #615140;
      display: block;
  }
  .about-left-li span {
    width: 240px;
    height: 37px;
    display: block;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    color: #615140;
    // margin-bottom: -30px;
    // background: chocolate;
  }
  // 团队展示
    .about-03 {
        margin-left: 275px;
        // background: orange;
        // display: none;
    }
    .td-img{
        width: 685px;
        height: 75px;
        margin-bottom: 20px;
    }
    .tdzs {
        width: 685px;
        height: 1000px;
        // background: peru;
        padding: 0 75px;
    }
    .tdzs img {
        width: 205px;
        height: 246px;
        margin: 30px 0;
    }
</style>
