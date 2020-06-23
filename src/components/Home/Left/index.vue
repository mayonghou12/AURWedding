<template>
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
    <!-- <div class="about-left2">
      <ul class="gywm-lists">
        <li class="gywm-list">
          关于我们
          <span>ABOUT US</span>
        </li>
          <a href="">
            <li class="gywm-lis lis">
              企业介绍
            </li>
          </a>
          <a class="lispan" href="">
            <li class="gywm-lis ">
              品牌文化
              <span>brand</span>
            </li>
          </a>
          <a class="lispan" href="">
            <li class="gywm-lis ">
              服务内容
              <span>Service</span>
            </li>
          </a>
          <a class="lispan" href="">
            <li class="gywm-lis ">
              团队展示
              <span>our team</span>
            </li>
          </a>
          <a class="lispan" href="">
            <li class="gywm-lis ">
              招贤纳士
              <span>recruit</span>
            </li>
          </a>
          <a class="lispan" href="">
            <li class="gywm-lis ">
              联系我们
              <span>contact</span>
            </li>
          </a>
      </ul>
    </div> -->
  </div>
</template>

<style scoped lang="less">
@import "~css/common.less";
  a{ text-decoration:none}
// 品牌主页面
  .about-title {
      // display: none;
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

// 关于我们
  .gywm-lists{
    width: 238px;
    height: 100%;
    display: none;
  }
  .gywm-list{
    padding: 25px 30px;
    font-size: 20px;
    color: #fff;
    background: #444;
    height: 98px;
    line-height: 30px;
  }
  .gywm-list span {
    display: block;
    width: 187px;
    height: 18px;
    font-size: 14px;
  }
  .lispan {
    width: 238px;
    height: 49px;
    & :hover{
    border-left: 4px solid #444;
    color: #444;
    }
  }
  .gywm-lis{
    width: 238px;
    height: 49px;
    color: #333;
    font-size: 14px;
    padding: 0 28px;
    line-height: 49px;
    border: 1px solid #dedede;
    border-top: 0px solid #dedede;;
    & :hover{
    border-left: 0px solid #444;
    color: #444;
    }
  }
  .gywm-lis span {
    margin: 0 7px;
  }
  .lis {
    border-left: 4px solid #444;
    color: #444;
  }
  .gywm-lis a{
    color: #333;
  }
</style>
