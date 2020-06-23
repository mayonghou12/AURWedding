<template>
  <div>
    <div class="router">
        <div class="about-title">
            <div class="about-left1">
            <div class="about-img">
                <img class="about-img-logo" src="http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/pinp2.png">
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

        <div class="about-right">
            <p class="curtule">
                <img src="../../../assets/img/pp.png" alt="">
            </p>
            <div class="about-img1">
            <img src="http://pic.tdy.picdns.com/52-0146/block/3405678202/201709/07/183830w35EY.jpg@816w_1e_1c.jpg" alt="">
            <p>  ·极光，是一种绚丽多彩的发光现象，
                常常出现于纬度靠近地磁极地区上空，
                一般呈带状、弧状、 幕状、放射状，
                这些形状有时稳定有时作连续性变化。
            </p>
            <p>
                ·欧若拉（拉丁语：Aurora，也译作奥罗拉）
                极光在拉丁语中和中国文化中都象征着太阳、
                能量、 尊贵、美好。欧若拉希望您能拥有花
                一般美好的生活。
            </p>
            <p class="margin-20-bottom">
                AURORA成立于2010年，旗下婚礼商品也拥有
                包罗万象的选择性。其创造性的产品多次登上
                《时 尚新娘》、《婚礼风尚》、《婚礼素材收集者》
                、《幻熊》等杂志。无论是巴洛克的华丽宫廷风，还
                是现感的简约风，亦或是中西文化的结合，AURORA无
                不不断突破自我，挑战我们的视觉极限，呈上 艺术的盛宴。
            </p>
            <img class="img1" src="http://pic.tdy.picdns.com/52-0146/block/3405678202/201709/07/183840PXT3n.jpg@816w_1e_1c.jpg" alt="">
            <p class="text">
                我们是一家专注高端婚礼的统筹机构，对于色彩、空间、
                时尚、具有敏锐触觉，对于细节近乎苛 刻的要求，在海
                西地区行业内使用AURORA已成为最高品质婚礼的代名词。
                在6年的过程中，我们不断 的将新颖的材质和对空间的
                利用理念引入到婚礼中，力求每一场极致婚礼，并将其
                与中国传统文化和 地域差别巧妙融合，每一场婚礼犹如
                一件艺术品，每一步都在向业内更高点的挑战。
            </p>
            <p class="text">
                AURORA作为行业标杆，独创新局，优雅转型，我们不仅
                做婚礼，我们也玩跨界！AURORA利用业 内优势，整合
                业内资源打造独一无二的运营新模式。AURORA潮流品
                牌概念店的诞生，预示着AURORA 将开创婚礼行业的新
                局面，同时，也将掀起本季一股潮流热。品牌概念店将
                以强大的号召力，不仅为 婚礼界新锐设计师找到更好的
                聚集地，更将成为集合各种潮流文化，小众范，文艺青年
                的聚集地，在 这里找到各种各样富有创意的新零售空间，
                你有机会能够从一系列的本地售卖新锐设计，婚礼策划和
                婚纱时装，珠宝首饰，生活花艺及家居用品中选择，寻找你
                的创意，走进知名生活方式买手店与主理 人探讨交流从业心得
                。在福建最潮的创意市集 AURORA 潮流品牌概念店中发现更多
                的时尚创意店铺， 寻找商业灵感，跨界融合方式。
            </p>
            <p class="text">
                目前，AURORA潮流品牌概念长乐NO.1店已经启幕，
                接下来，AURORA将趁着阳光正好，将陆续在 福州、
                福清、泉州等地持续掀起行业新潮流，AURORA期待
                像极光般更加七彩斑斓的未来！
            </p>
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
  .about-img-logo{
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
 // 品牌文化

  .about-right{
    //   display: none;
      height: 100%;
      width: 682px;
    //   background: red;
      margin-left: 278px;
  }
  .about-right p{
       text-indent:2em
  }
  .curtule{
    font-size: 12px;
    font-family: '微软雅黑';
    padding-top: 15px;
  }
  .curtule img {
      margin-bottom: 20px;
  }
  .about-img{
      margin: 20px 0;
  }
  .about-img p{
      width: 681.59px;
    //   height: 50px;
      color: #000;
      font-size: 14px;
      margin: 10px 0 ;
      font-family: '微软雅黑';
  }
  .about-img1 img {
      width: 682px;
      height: 315px;
  }
  .about-img1 .img1{
      width: 682px;
      height: 627px;
      margin-bottom: 15px;
  }
   .about-img p.text {
      margin-bottom:30px ;
      font-size: 14px;
      font-family: '微软雅黑';
  }
</style>
