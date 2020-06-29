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

        <div class="about-02">
            <img class="fwnr" src="../../../assets/img/fwnr.png" alt="">
            <div class="hunli cleafix">
            <div class="about-02-img-text fl">
                <img class="hL fr" src="../../../assets/img/hl.png" alt="">
                <p class="fr">婚礼，是人生一场重要的仪式</p>
                <p class="fr">或繁或简</p>
                <p class="fr">都将是可以回味一辈子的瞬间</p>
                <p class="fr">高端婚礼私人订制</p>
                <p class="fr">满足您一切对梦幻婚礼的想象</p>
                <strong class="str fr">交给AURORA，许你一场终生难忘的浪漫婚礼</strong>
            </div>
            <img class="fr wedd" src="http://pic.tdy.picdns.com/52-0146/block/1864491093/201709/07/190241JhoNT.jpg@267w_367h_1e_1c.jpg" alt="">
            </div>
            <div class="qyhd">
                <img class="qy" src="http://pic.tdy.picdns.com/52-0146/block/1864491093/201709/07/190300WPhuU.jpg@399w_270h_1e_1c.jpg" alt="">
                <div class="fr hdnr">
                    <img class="hd fl" src="../../../assets/img/qyhd.png" alt="">
                    <p class="fr">企业的凝聚力在于员工们形成的纽带</p>
                    <p class="fr">专业的团队为您打造优质的团队宴会、活动</p>
                    <p class="fr">增强企业品牌力量</p>
                    <p class="fr">塑造质感的企业形象与团队魅力</p>
                    <span>
                        AURORA定不负所托，为您展示独一无 二的品牌气质
                    </span>
                </div>
            </div>

            <div class="sryh">
                <div class="sry fl">
                    <img class="sr fr" src="../../../assets/img/sryh.png" alt="">
                    <p class="fr">从确定婚期开始 新娘便会开始</p>
                    <p class="fr">纠结各种搭配</p>
                    <p class="fr">婚纱、美妆、珠宝等等</p>
                    <p class="fr">高端定制能为您做的，就是成为婚礼现场最瞩目的美娇娘</p>
                    <span class=" str fl">AURORA量身搭配与定制，所到之处都是闪亮的存在</span>
                </div>
                <img class="sr-img fr" src="http://pic.tdy.picdns.com/52-0146/block/1864491093/201709/07/190326tYyyk.jpg@399w_270h_1e_1c.jpg" alt="">
            </div>

            <div class="gddz">
                <img class="gd-img fl" src="http://pic.tdy.picdns.com/52-0146/block/1864491093/201709/07/190349DSC2z.jpg@267w_367h_1e_1c.jpg" alt="">
                <div class="gdd">
                    <img class="fl" src="../../../assets/img/gddz.png" alt="">
                    <p>无论是求婚、生日Party、宝宝宴、纪念日、成人礼</p>
                    <p>交给我们，专属定制您的主题私人宴会</p>
                    <p>作为主角安心享受每个重要时刻</p>
                    <span class=" str1 fl">选择AURORA，让宾客与您一同分享每一份喜悦</span>
                </div>
            </div>

            <div class="xxls">
                <div class="xxl">
                    <img class="fr" src="../../../assets/img/xxls.png" alt="">
                    <p>跨界婚礼潮流品牌概念店</p>
                    <p>可以在AURORA喝咖啡、学插花、玩创意</p>
                    <p>当然也可以搜罗到各种懂生活的新锐设计师原创作品</p>
                    <p>总之，我们好像是无所不能</p>
                    <span class="str fl">在AURORA,您可以迅速找到和你属性匹配的创意集合</span>
                </div>
                <img class="xx-img" src="http://pic.tdy.picdns.com/52-0146/block/1864491093/201709/07/190409m3tab.jpg@267w_367h_1e_1c.jpg" alt="">
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

  // 服务内容
    .about-02{
        margin-left: 275px;
        // display: none;
    }
    .about-02 p{
        text-indent:2em
    }
    .fwnr{
        margin-bottom: 20px;
    }
    .about-02-img-text{
        width: 389.5px;
        height: 407px;
        font-size: 14px;
        font-family: '微软雅黑';
        color: #666;
    }
    // 婚礼
    .hunli{
        width: 685px;
        height: 407px;
        margin-bottom: 70px;
    }
    .hL{
        margin-bottom: 10px;
    }
    .hunli p{
        height: 25px;
        width: 215.5px;
        text-align: right;
    }
    .str {
        height: 62px;
        color: #5f5242;
        margin-top: 20px;
        font-size: 20px;
        text-align: right;
    }
    .str1{
        height: 62px;
        color: #5f5242;
        margin-top: 20px;
        font-size: 20px;
        text-align: left;
    }
    .wedd{
        margin-top: 40px;
        margin-left: 25px;
        // width: 267px;
        // height: 367px;
    }
    // 企业活动
    .qyhd{
        width: 685px;
        height: 360px;
        margin-bottom: 70px;
    }
    .qy{
        width: 330px;
        height: 223px;
        margin: 40px 0 ;
    }
    .hdnr {
        width: 328px;
        height: 352px;
        font-size: 14px;
        font-family: '微软雅黑';
        color: #666;
    }
    .hdnr p {
        width: 350px;
        height: 25px;
        text-align: left;
    }
    .hdnr span{
        width: 327px;
        height: 60px;
        font-size: 20px;
        color: #5f5242;
    }
    // 私人宴会
    .sryh{
        width: 685px;
        height: 370px;
        font-size: 14px;
        color: #666;
        margin-bottom: 70px;
    }
    .sry {
        width: 328px;
        height: 100%;
    }
    .sry p {
        width: 310px;
        height: 25px;
        text-align: right;
    }
    .sry .sry{
        margin-top: 20px;
    }
    .sr-img{
        width: 330px;
        height: 223px;
        margin: 40px 0 ;
    }
    // 高端定制
    .gddz {
        width: 685px;
        height: 427px;
        margin-bottom: 70px;
    }
    .gd-img{
        width: 267px;
        height: 367px;
        margin: 40px 0;
    }
    .gdd{
        width: 388px;
        height: 100%;
        margin-left: 30px;
        float: left;
    }
    .gdd p {
        margin-left: -25px;
        float: left;
        width:388.5px ;
        height: 25px;
        text-align: left;
        color: #666;
    }
    .xxls{
        width: 685px;
        height: 407px;
        margin-bottom: 70px;
    }
    .xxl {
        width: 388.5px;
        height: 352px;
        float: left;
    }
    .xxl p {
        float: right;
        width: 388.5px;
        height: 25px;
        text-align: right;
    }
    .xx-img {
        width: 266px;
        height: 367px;
        margin: 40px 0;
        margin-left: 30px;
    }
</style>
