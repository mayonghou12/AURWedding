<template>
  <div>
    <div class="w-960">
      <el-carousel  class="item-i" :interval="5000" >
        <el-carousel-item v-for="(item, indxe) in list" :key="indxe">
          <h3 ><img :src="item.img"></h3>
        </el-carousel-item>
      </el-carousel>
      <div class="biaoyu-text">
        <span class="b1"></span>
        <span class="b2"></span>
      </div>
      <div class="aurora">
        <img src="http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/h5.png">
      </div>
      <div class="global">
        <div class="global-upper">
          <div class="global-a">全球旅拍</div>
          <em>GLOBAL TOUR</em>
          <a class="righthide">更多>></a>
          <p></p>
        </div>
        <ul class="cl">
          <li>
          <router-link to='/shouhuy'>
            <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/100019GSNKs.jpg@386w_443h_1e_1c.jpg">
          </router-link>
          </li>
          <li>
            <router-link to='/yunitongzai'>
            <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/100228N0206.jpg@386w_443h_1e_1c.jpg">
            </router-link>
          </li>
          <li>
          <router-link to='haibianlanman'>
            <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/095707WgPDk.jpg@386w_443h_1e_1c.jpg">
          </router-link>
          </li>
        </ul>
      </div>

      <div class="Wedding">
        <div class="Wedding-upper">
          <div class="Wedding-a">婚庆案例</div>
          <em>GLOBAL TOUR</em>
          <a class="righthide1">更多>></a>
          <p></p>
        </div>
        <ul class="al">
          <li>
            <router-link to='/wedding1'>
                <img src="//pic.tdy.picdns.com/52-0146/show/201709/07/103736J1V9B.jpg@385w_359h_1e_1c.jpg">
              <div class="alcont">
              </div>
              <div class="ins">
                    <span></span>
                    <p>世纪金源大酒店</p>
                    <h3>【锦瑟年华·缘洁三生】</h3>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to='/wedding2'>
            <img src="//pic.tdy.picdns.com/52-0146/show/201709/07/103957iy3LQ.jpg@385w_359h_1e_1c.jpg">
            <div class="alcont">
            </div>
            <div class="ins">
                    <span></span>
                    <p>长乐</p>
                    <h3>【鲲鹏翼·青云志】</h3>
              </div>
              </router-link>
          </li>
          <li>
            <router-link to='/wedding3'>
            <img src="//pic.tdy.picdns.com/52-0146/show/201709/07/103457kBR6R.jpg@385w_359h_1e_1c.jpg">
              <div class="alcont">
            </div>
          <div class="ins">
                  <span></span>
                  <p>长乐漳港</p>
                  <h3>【花漾倾城】</h3>
            </div>
            </router-link>
          </li>
          <li>
            <router-link to='/wedding4'>
            <img src="//pic.tdy.picdns.com/52-0146/show/201709/07/102558C70gP.jpg@385w_359h_1e_1c.jpg">
            <div class="alcont">
            </div>
          <div class="ins">
                  <span></span>
                  <p>香格里拉大酒店</p>
                  <h3>【Belong】</h3>
            </div>
            </router-link>
          </li>
          <li>
            <router-link to='/wedding5'>
            <img src="//pic.tdy.picdns.com/52-0146/show/201709/07/104213NZZs9.jpg@385w_359h_1e_1c.jpg">
            <div class="alcont">
            </div>
          <div class="ins">
                  <span></span>
                  <p>长乐恒申集团/p>
                  <h3>【磊心玮漪】</h3>
            </div>
            </router-link>
          </li>
          <li>
            <router-link to='/wedding6'>
            <img src="//pic.tdy.picdns.com/52-0146/show/201709/07/104430bKnR3.jpg@385w_359h_1e_1c.jpg">
              <div class="alcont">
            </div>
          <div class="ins">
                  <span></span>
                  <p>喜来登大酒店</p>
                  <h3>【梦里花开】</h3>
            </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
.item-i div{
  height: 500px;
  }
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;

  }
.el-carousel__item h3 img {
  width: 960px;
  height: 500px;
  }
.biaoyu-text {
  overflow: hidden;
  width: 1000px;
  height: 130px;
  margin: 25px auto;
  position: relative;
  background: url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/h7.png) no-repeat center center;
  & span.b1{
    // transform: translateX(-193px);
    // transition: .5s;
    animation: d1 .5s;
    animation-fill-mode: forwards;
  }
  & span.b2{
    // transform: translateX(193px);
    animation: d2 .5s;
    animation-fill-mode: forwards;
    // transition: .5s;
  }
  &:hover span.b1{
    transform: translateX(130px);
  }
  &:hover span.b2{
    transform: translateX(-130px);
  }
}
@keyframes d1 {
  0%{
    transform: translateX(-193px);
  }
  100%{
    transform: translateX(130px);
  }
}
@keyframes d2 {
  0%{
    transform: translateX(193px);
  }
  100%{
    transform: translateX(-130px);
  }
}
.biaoyu-text span {
  width: 48px;
  height: 40px;
  display: block;
  position: absolute;
  background: url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/h3.png) no-repeat center center;;
}
.biaoyu-text span.b2 {
  right: 0;
  bottom: 0;
 background: url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/h4.png) no-repeat center center;
}
.aurora {
  width:960px;
  height:100px;
  background: #2e2c2d;
}
.aurora img {
  max-width: 100%;
  height: auto;
}
/* 全球旅拍开始 */
.global {
 width:960px;
}
.global-upper {
  width: 100%;
  height: 70px;
  position: relative;
  margin-top: 25px;
  text-align: center;
  overflow: hidden;
  & a.righthide{
    animation: d3 .5s;
    animation-fill-mode: forwards;
  }
}
@keyframes d3{
  0%{
    transform: translateX(55px);
  }
  100%{
    transform: translateX(0px);
  }
}
@keyframes d4{
  0%{
    transform: translateX(55px);
  }
  100%{
    transform: translateX(0px);
  }
}
.global-a {
  font-weight: 400;
  font-size: 33px;
  background: #eaebecff;
  display: inline-block;
  padding: 0 15px;
  color: #615140;
  line-height: 1;
}
.global-upper em {
  text-transform: uppercase;
  font-size: 24px;
  display: block;
  font-style: normal;
  width: 100%;
  text-align: center;
  /* font-family: -webkit-pictograph; */
}
.global-upper a {
  display: block;
  position: absolute;
  right: 0;
  font-size: 16px;
  bottom: 0;
  color: #615140;
}
.global-upper p {
  border-top: 2px solid #ddd;
  margin-top: -50px;
}
/* 全球旅拍下面图片开始 */
.global ul {
  list-style: none;
  margin-top: 30px;
  width: 100%;
  height: 370px;
  padding: 0;
}
.cl {
  zoom: 1;
  & li a img{
    transition: all .5s;
  }
  & li a:hover img{
    transform: scale(1.1);
  }
}
.global a {
  display: block;
  text-decoration: none;
}
.global li{
  float: left;
  width: 32.6%;
  margin-right: 10px;
  margin-bottom: 7px;
  &:last-child{
    margin: 0;
  }
}
.global li a img {
  width: 100%;
  height: auto;
}
/* 婚庆案例开始 */
.Wedding {
 width:960px;
 & a.righthide1{
    animation: d4 .5s;
    animation-fill-mode: forwards;
 }
}
.Wedding-upper {
  width: 100%;
  height: 70px;
  position: relative;
  margin-top: 25px;
  text-align: center;
}
.Wedding-a {
  font-weight: 400;
  font-size: 33px;
  background: #eaebec;
  display: inline-block;
  padding: 0 15px;
  color: #615140;
  line-height: 1;
}
.Wedding-upper em {
  text-transform: uppercase;
  font-size: 24px;
  display: block;
  font-style: normal;
  width: 100%;
  text-align: center;
  /* font-family: -webkit-pictograph; */
}
.Wedding-upper a {
  display: block;
  position: absolute;
  right: 0;
  font-size: 16px;
  bottom: 0;
  color: #615140;
}
.Wedding-upper p {
  border-top: 2px solid #ddd;
  margin-top: -50px;
}
/* 婚庆案例下面图片开始 */
.Wedding ul {
  list-style: none;
  margin-top: 30px;
  padding: 0;
  overflow: hidden;
}
.Wedding li{
  width:32.5%;
  margin-right: 8px;
  margin-bottom: 10px;
    float: left;
    position: relative;
    overflow: hidden;
    height: 290.3px;
    img {
       width: 100%;
      height: auto;
    }
    .alcont{
      // animation: fade-in;/*动画名称*/
      // animation-duration: 1.5s;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      // display: none;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
    }
    .ins{
      width: 225px;
      height: 128px;
      display: block;
      margin: 2px;
      padding: 15px;
      position: absolute;
      bottom: -135px;
      transition: .6s;
      font-size: 16px;
      color: #a1906a;
      left: 14%;
      // transform: translateY(-200px);
      background: url('http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/h6.png');
      span{
        display: inline-block;
        width: 100%;
        height: 50px;
        background: url('http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/logo2.png') no-repeat;
      }
      p,h3{
        margin: 0;
        font-size: 16px;
        text-align: center;
      }
    }
    &:hover .alcont {
        // display: block;
        opacity: 1;
        transition: 1s;
    }
    &:hover .ins{
    transform: translateY(-200px);
  }
}

  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */

</style>
<script>
export default {
  data () {
    return {
      list: [
        { img: 'http://pic.tdy.picdns.com/52-0146/block/1420008946/201709/12/160754iZW5m.jpg@1188w_628h_1e_1c.jpg' },
        { img: 'http://pic.tdy.picdns.com/52-0146/block/1420008946/201709/07/092808Q4n9e.jpg@1188w_628h_1e_1c.jpg' },
        { img: 'http://pic.tdy.picdns.com/52-0146/block/1420008946/201709/07/092817F055I.jpg@1188w_628h_1e_1c.jpg' },
        { img: 'http://pic.tdy.picdns.com/52-0146/block/1420008946/201709/07/092828vD3zf.jpg@1188w_628h_1e_1c.jpg' }
      ]
    }
  }
}
</script>
