<template>
    <div>
        <div class="content">
          <div class="w-960">
            <div class="haiwai"></div>
            <div class="box">
              <img class="img" src="../../assets/img/hw1.png" />
              <div class="text-box">
                <p>海外婚礼&nbsp;/&nbsp;VIDEO&nbsp;>></p>
                <span>没有安装flash，请<a href="https://www.flash.cn/">下载</a></span>
              </div>
              <div class="price-box">
                <p>产品套系&nbsp;/&nbsp;PRICE&nbsp;>></p>
                <ul>
                  <li class="fl">
                    <a href="#">
                      <img src="../../assets/img/hw2.png" />
                      <div class="text">
                        <p>水晶套系</p>
                        <span>Crystal set of system</span>
                      </div>
                    </a>
                  </li>
                  <li class="fl">
                    <a href="#">
                      <img src="../../assets/img/hw2.png" />
                      <div class="text">
                          <p>钻石套系</p>
                          <span>Diamond set of system</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="photo-box">
                <p>海外婚礼&nbsp;/&nbsp;PHOTO&nbsp;>></p>
                <ul>
                  <li class="fl">
                    <img src="../../assets/img/162132hNGXF.jpg@582w_387h_1e_1c.jpg" />
                  </li>
                  <li class="fl">
                    <img src="../../assets/img/162132hNGXF.jpg@582w_387h_1e_1c.jpg" />
                  </li>
                  <li class="fl">
                    <img src="../../assets/img/162132hNGXF.jpg@582w_387h_1e_1c.jpg" />
                  </li>
                  <li class="fl">
                    <img src="../../assets/img/162132hNGXF.jpg@582w_387h_1e_1c.jpg" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
@import '~css/common.less';
.content {
  background: #eae8e9;
  padding-bottom: 50px;
  & .w-960 {
    margin: 0 auto;
    & .haiwai {
    .background(pink);
    width: 100%;
    height: 167px;
    background: url(../../assets/img/hw.png)no-repeat center left;
    }
    & .box {
      margin-top: 20px;
      background: #fff;
      padding-bottom: 100px;
      position: relative;
      & .img{
        width: 75%;
        height: 140px;
        border-bottom: 1px solid #000;
        margin-top: 0;
        margin-left: 100px;
        margin-bottom: 50px;
      }
      & .text-box {
        margin-top: 0;
        height: 60px;
        padding-left: 25px;
        & p{
          font-size: 18px;
          color: #5f533d;
          font-weight: 400;
          margin-bottom: 15px;
        }
        & span {
          color: #000;
        }
      }
      & .price-box {
        margin-top: 40px;
        padding: 40px 29px;
        border-top: 1px solid #5f533d;
        border-bottom: 1px solid #5f533d;
        & p {
          color: #5f533d;
          font-size: 18px;
          font-weight: 400;
        }
        & ul {
          margin: 50px 0;
        }
        & li {
          width: 50%;
          text-align: center;
          position: relative;
          & a {
            & .text {
              text-align: center;
              color: #776654;
              font-size: 23px;
              position: absolute;
              top: 85px;
              right: 60px;
              & p {
                font-size: 32px;
              }
              & span {
                font-size: 18px;
                white-space: nowrap;
              }
            }
          }
        }
      }
      & .photo-box {
        margin-top: 40px;
        & p {
          color: #5f533d;
          font-size: 18px;
          font-weight: 400;
        }
        & ul {
          margin-top: 20px;
          & li {
            margin-bottom: 2%;
            & img {
              width: 100%;
              height: auto;
            }
          }
          & li:nth-child(odd) {  // 奇数
            width: 49%;
            margin-right: 2%;
          }
          & li:nth-child(even) { // 偶数
            width: 49%;
          }
        }
      }
    }
  }
}
</style>
