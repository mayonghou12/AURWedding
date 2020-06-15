<template>
  <div class="about-left">
    <div class="about-img">
      <img src="http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/pinp2.png">
    </div>
    <ul class="about-left-ul">
      <li class="about-left-li">
          <div>
              <a href="">企业介绍</a>
          </div>
          <div>
            <span>Brand</span>
           <a href="">品牌文化</a>
          </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import "~css/common.less";
  a{ text-decoration:none}
  .about-left {
      font-family:"微软雅黑,宋体";
      background: chartreuse;
      height: 100%;
      width: 240px;
      float: left;
  }
  .about-img img{
      width: 240px;
      height: 240px;
  }
  .about-left-ul{
      width: 100%;
      height: 100%;
  }
  .about-left-li{
      margin: 40px 0 50px;
      width: 240px;
      height: 82px;
      margin-top: 50px;
      color: #615140;
      float: left;
    //   background: violet;
      font-size: 33px;
      font-family:"微软雅黑,宋体";
    & a{
        display: block;
        width: 240px;
        height: 50px;
        border-bottom: 2px solid #a1906a;
        text-align: center;
        line-height: 35px;
        margin-bottom: 30px;
    }
    & span{
        display: block;
        width: 240px;
        height: 37px;
      color: #615140;
        font-size: 25px;
        text-align: center;
        line-height: 35px;
    }
    &:hover a,span {
        color: #c5a346;
      }
    }

</style>
