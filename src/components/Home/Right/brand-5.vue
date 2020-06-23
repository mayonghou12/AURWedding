<template>
  <div>
      <div class="router">
        <div class="about-title">
    <div class="about-left2">
      <ul class="gywm-lists">
        <li class="gywm-list">
          关于我们
          <span>ABOUT US</span>
        </li>
          <router-link to="brandfive">
            <a href="">
              <li class="gywm-lis lis">
                企业介绍
              </li>
            </a>
          </router-link>
          <router-link to="brandsix">
            <a class="lispan" href="">
              <li class="gywm-lis ">
                品牌文化
                <span>brand</span>
              </li>
            </a>
           </router-link>
          <router-link to="brandone">
          <a class="lispan" href="">
            <li class="gywm-lis ">
              服务内容
              <span>Service</span>
            </li>
          </a>
          </router-link>
          <router-link to="brandtwo">
            <a class="lispan" href="">
              <li class="gywm-lis ">
                团队展示
                <span>our team</span>
              </li>
            </a>
          </router-link>
          <router-link to="brandthree">
            <a class="lispan" href="">
              <li class="gywm-lis ">
                招贤纳士
                <span>recruit</span>
              </li>
            </a>
          </router-link>
          <router-link to="brandfor">
            <a class="lispan" href="">
              <li class="gywm-lis ">
                联系我们
                <span>contact</span>
              </li>
            </a>
          </router-link>
      </ul>
    </div>
    </div>

       <div class="about-01">
        <div class="qyjs-title">
            <div class="list">
                <span class="tanme">企业介绍</span>
                <span class="p-10-l font-14">about Us</span>
                <span class="text fr">
                    当前位置：
                    <a href="">网站首页</a>
                    <span>></span>
                    <a href="">关于我们</a>
                </span>
            </div>
        </div>
        <div class="page-content">
            <div class="page-cont">
                企业介绍
            </div>
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
// 企业介绍
    .about-01 {
        margin-left: 275px;
        margin-bottom: 175px;
        width: 685px;
        height: 267px;
        // display: none;
        padding: 24px;
        font-size: 12px;
        font-family: '微软雅黑' ;
        color: #888;
        border: 1px solid #dedede;
    }
    a{ text-decoration:none};
    .qyjs-title{
        width: 635px;
        height: 33px;
        margin: 0 0 15px;
        border-bottom: 1px solid #ccc;
        line-height: 32px;
    }
    .qyjs-title .list{
        font-size: 16px;
        color: #000;
    }
    .tanme{
        float: left;
        display: block;
        width: 64px;
        height: 33px;
        border-bottom:1px solid #1d62a3;
    }
    .list span{
        color: #888;
    }
    .text{
        font-size: 12px;
    }
    .text a{
        font-size: 12px;
        color: #888;
        &:hover{
            color: #0d66c0;
        }
    }
    .page-content{
        width: 637px;
        height: 169px;
        font-size: 14px;
        color: #000;
        padding: 25px 0px 120px;
    }

// 关于我们
  .gywm-lists{
    width: 238px;
    height: 100%;
    // display: none;
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
