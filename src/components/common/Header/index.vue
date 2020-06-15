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
              <p>BRAND</p>
              <span>品牌</span>
          </a>
        </li>
        <li class="header-li">
          <a class="header-list">
            <p>PHOTO</p>
            <span>旅拍</span>
          </a>
        </li>
        <li class="header-li">
           <a class="header-list">
              <p>WED</p>
              <span>婚礼</span>
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
              <p>BEAUTY</p>
              <span>美妆</span>
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
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<style scoped lang= "less">
@import "~css/varbile.less";

.header1{
  font-family:"微软雅黑,宋体";
  /* font-weight:bold; */
  height: 186px;
  width: 1349px;
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
  /* &:hover {
    .el-hover( #A27f30, transparent);
  } */
  &:hover {
    & p,span {
      color: #A27f30;
    }
  }
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

<script>
export default {
  data () {
    return {
      list: [{

      }]
    }
  }
}
</script>
