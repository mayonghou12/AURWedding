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

    <div class=" about-05">
        <img class="lxwm-img" src="../../../assets/img/lxwm.png" alt="">
        <div class="lxwm">
            <img class="lx-img" src="http://pic.tdy.picdns.com/52-0146/block/719271169/201709/08/144254VMv03.jpg@641w_592h_1e_1c.jpg" alt="">
        </div>
        <div class="lxm">
            <p>全国免费热线电话：400-8875-520</p>
            <p>联系电话：18350027277</p>
            <p>微信公众号：orl88599571</p>
            <p>新浪微博：weibo.com/u/3434482464</p>
            <p>官方网站：</p>
            <p>投诉邮箱：164500580@qq.com</p>
            <p>公司地址：福州市台江区工业路370号中央第五大街1#20F（总部）</p>
            <em>福州市仓山区浦下洲路23号（海峡国际会展中心旁）中庚喜来登酒店（分店）</em>
            <em>长乐市吴航路国惠酒店旁皇庭名郡2号店面S46（分店）</em>
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
      height: 42px;
      margin-top: 10px;
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
  // 联系我们
        .about-05 {
        margin-left: 275px;
        width: 685px;
        height: 100%;
        // display: none;
    }
    .lxwm-img{
        width: 685px;
        height: 75px;
        margin-bottom: 20px;
    }
    .lxwm{
        width: 685px;
        height: 660px;
        text-align: center;
        border-bottom: 1px solid #d0c8b5;
    }
    .lx-img{
        margin: 20px 0;
    }
    .lxm{
        padding: 50px 0;
        border-bottom: 1px solid #d0c8b5;
        font-size: 14px;
        color: #666;
        font-family: '微软雅黑';
    }
    .lxm p{
        width: 685px;
        height: 28px;
        text-align: left;
    }
    .lxm em{
        display: block;
        width: 593px;
        height: 70px;
        font-size: 18px;
        margin: 0 0 0 89px;
        text-align: left;
        line-height: 36px;
    }
</style>
