<template>
<div class="header clearfix">
  <div class="header1 ">
    <div class="header-design">
      <div class="design-logo">
        <img src="../../../assets/img/logo.png"/>
      </div>
      <div class="design-h clearfix">
        <img class="design-h1" src="../../../assets/img/h1.png">
        <img class="design-h2" src="../../../assets/img/h2.png"/>
      </div>
    </div>
    <div class="header-lists clearfix">
      <ul class="header-ul clearfix">
        <li class="header-li">
          <a class="header-list">
            <p class="">HOME</p>
            <span class="">首页</span>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
             <router-link to="/brandsix">
              <p>BRAND</p>
              <span>品牌</span>
              <ul class="tk-list">
                <li><router-link to="/brandone">服务内容</router-link></li>
                <li><router-link to="/brandtwo">团队展示</router-link></li>
                <li><router-link to="/brandthree">招贤纳士</router-link></li>
                <li><router-link to="/brandfor">联系我们</router-link></li>
              </ul>
            </router-link>
          </a>
        </li>
        <li class="header-li">
          <a class="header-list">
            <p>PHOTO</p>
            <span>旅拍</span>
            <ul class="tk-list tk-lihei">
                <li><a href="">客片欣赏</a></li>
                <li><a href="">全年档期</a></li>
              </ul>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>WED</p>
              <span>婚礼</span>
              <ul class="tk-list tk-lihei">
                <li><a href="">国内婚礼</a></li>
                <li><a href="">海外婚礼</a></li>
              </ul>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>HOTEL</p>
              <span>酒店</span>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>DRESS</p>
              <span>婚纱</span>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
             <router-link to="/beautyone">
              <p>BEAUTY</p>
              <span>美妆</span>
             <ul class="tk-list tk-liwid">
                <li><router-link to="/beautyone">私人订制</router-link></li>
                <li><router-link to="/beautytwo">新娘跟妆</router-link></li>
                <li><router-link to="/beautythree">生活妆</router-link></li>
                <li><router-link to="/beautyfor">私家彩妆课程</router-link></li>
              </ul>
             </router-link>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>JEWELLERY</p>
              <span>珠宝</span>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>HONEYMOON</p>
              <span>蜜月</span>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>MALL</p>
              <span>商城</span>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>NEWS</p>
              <span>资讯</span>
              <ul class="tk-list tk-liwihi">
                <li><a href="">新闻动态</a></li>
                <li><a href="">婚礼筹备</a></li>
                <li><a href="">明星经纪</a></li>
              </ul>
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<style scoped lang= "less">
@import "~css/varbile.less";
a{ text-decoration:none}
.header1{
  font-family:"微软雅黑,宋体";
  /* font-weight:bold; */
  height: 186px;
  width: 100%;
  background: #2e2c2d;
  color: #000;
  padding: 50px 0 15px;
}

.header-design{
  height: 121px;
  width: 960px;
  color: #000;
  font-size: 12px;
  margin: 0 194.5px;
}

.design-logo{
  width:960px;
  height: 81px;
  float: left;
}

.design-h {
  float: right;
}
.header1{
  position: relative;
}
.design-h2 {
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.design-h1{
  float:left;
}

.header-lists{
  width: 1349px;
  height: 99px;
  margin-top:38px;
  margin-bottom: 18px;
  padding: 15px 0 18px;
  line-height: 31px;
  border-top:2px solid #bbb;
  border-bottom:2px solid #bbb;
  zoom: 1;
  margin: 1 auto;
}
.header-ul {
  width: 962px;
  height: 100%;
  zoom: 1;
  margin: 0 auto;
  /* margin-bottom: 30px; */
}
.header-li {
  float: left;
  /* position: relative; */
  list-style: none;
}

.header-list{
  /* width: 75px; */
  height: 62px;
  padding: 5px 15px;
  display: block;
  text-align: center;
  font-size: 20px;
  color: #333;
  text-decoration: none;
  text-align: center;
  position: relative;
  /* &:hover {
    .el-hover( #A27f30, transparent);
  } */
  &:hover {
    & p,span {
      color: #A27f30;
    }
    & .tk-list{
      display:block;
    }
  }
}
.tk-list{
  font-size: 16px;
  width: 94px;
  height: 136px;
  line-height: 35px;
  position: absolute;
  top: 60px;
  left: 0;
  background: rgba(161, 144, 106, 0.78);
  display: none;
}
.tk-lihei{
   height: 100%;
}
.tk-liwid{
  width: 100px;
}
.tk-liwihi{
  width: 94px;
  height: 107px;
}
.tk-list a{
  color: #fff;
  text-decoration:none;
}
.header-list p{
  font-size:15px;
  color: #666666;
  height: 22px;
  text-align: center;
  line-height: 15px;
  margin: 0;
  /* display: inline-block; */
}
.header-list span{
  /* display: block; */
  width: 100%;
  font-size:20px;
  color: #333333;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
}
.fl{
  float: left;
}
.fr{
  float: right;
}

</style>
