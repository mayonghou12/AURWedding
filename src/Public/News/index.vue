<template>
    <div>
        <div class="news">
            <div class="news-content">
                <div class="news-content-left">
                    <div class="nav-01">
                        <div class="news-logo">
                            <img src="http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/newsbg.png" alt="">
                        </div>
                    </div>
                   <div class="nav-02">
                        <ul class="news-titles-01">
                            <li v-for="(item, index) in list" :key="index" class="news-title">
                                <router-link :to="item.to">
                                    {{item.newsTitle02}}
                                    <span>{{item.newsTitle01}}</span>
                                </router-link>
                            </li>
                            <!-- <li class="news-title">
                                <router-link to="/preparation">
                                    婚礼筹备
                                    <span>preparation</span>
                                </router-link>
                            </li>
                            <li class="news-title">
                                <router-link to="/starBroker">
                                    明星经纪
                                    <span>star broker</span>
                                </router-link>
                            </li> -->
                        </ul>
                   </div>
                    <div class="nav-03">
                        <div class="nav-03-title">新闻动态</div>
                        <ul class="news-titles-03">
                            <li v-for="(newsTitle, index1) in list1" :key="index1" class="news-title-01">
                                <router-link :to="newsTitle.to">{{newsTitle.title}}</router-link>
                            </li>
                            <!-- <li class="news-title-01"><a href="">准新人该如何预定婚宴酒席桌数   </a></li>
                            <li class="news-title-01"><a href="">婚宴陷阱知多少？</a></li>
                            <li class="news-title-01"><a href="">4中婚礼场地任你选择</a></li>
                            <li class="news-title-01"><a href="">好的婚礼策划师该如何发现？</a></li> -->
                        </ul>
                    </div>
                </div>
                <div class="news-content-right">
                    <!-- logo -->
                   <div class="nwes-r-logo">
                       <p></p>
                   </div>
                   <!-- recent-news -->
                   <div class="recent-news">
                        <ul v-for="(recentUL, index2) in list2" :key="index2" class="news-content">
                            <li class="news-content-details">
                                <router-link :to="recentUL.to">
                                        <span class="news-detail-img">
                                            <img :src="recentUL.imgs" />
                                        </span>
                                        <div class="news-detail-content">
                                            <em>{{recentUL.date}}</em>
                                            <h3>{{recentUL.title}}</h3>
                                            <p>
                                                {{recentUL.content}}
                                            </p>
                                        </div>
                                </router-link>
                            </li>
                        </ul>
                        <!-- <ul class="news-content">
                            <li class="news-content-details">
                                <a href="">
                                        <span class="news-detail-img">
                                            <img src="http://pic.tdy.picdns.com/52-0146/news/201709/12/145858RrDz4.jpg@257w_126h_1e_1c.jpg" alt="">
                                        </span>
                                        <div class="news-detail-content">
                                            <em>| Sep,12,2017</em>
                                            <h3>准新人该如何预定婚宴酒席桌数</h3>
                                            <p>
                                                预定婚宴酒席桌数相信是每个准新人非常头疼的问题，即使对于不差钱的新人来说，你定多了空得太多了也不是很美观，而定的太少的情况，那就更尴尬了。下面就让欧诺拉福州婚庆公司给你支几招吧。招式一：酒席桌数按来宾预定1、一般来说，亲戚会全家到场，个别的也可以直接电话确 ...
                                            </p>
                                        </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="news-content">
                            <li class="news-content-details">
                                <a href="">
                                        <span class="news-detail-img">
                                            <img src="http://pic.tdy.picdns.com/52-0146/news/201709/12/145759h0IiL.jpg@257w_126h_1e_1c.jpg" alt="">
                                        </span>
                                        <div class="news-detail-content">
                                            <em>| Sep,12,2017</em>
                                            <h3>婚宴陷阱知多少？</h3>
                                            <p>
                                                对于一场婚礼来说，婚宴绝对是不可或缺的一部分，大多数的来宾都希望在婚宴中能够分享新人的喜庆。所以在预定婚宴的时候可千万马虎不得，而婚宴其中的这些陷阱你又了解吗？下面就和欧诺拉福州婚庆公司一起来看看吧。婚宴陷阱之——上菜速度的快慢猫腻你可能不知道酒店有时候 ...
                                            </p>
                                        </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="news-content">
                            <li class="news-content-details">
                                <a href="">
                                        <span class="news-detail-img">
                                            <img src="http://pic.tdy.picdns.com/52-0146/news/201709/12/145702XrsbJ.jpg@257w_126h_1e_1c.jpg" alt="">
                                        </span>
                                        <div class="news-detail-content">
                                            <em>| Sep,12,2017</em>
                                            <h3>4中婚礼场地任你选择</h3>
                                            <p>
                                                第一种：一条龙服务这种一站式会所，讲究的就是一站式服务，轻松搞定。无需烦恼繁琐的筹备婚礼过程。真正意义上的一站式婚礼是基于一站式会所，能为新人提供一条龙婚礼服务，包括了婚礼策划、婚纱礼服定制、珠宝选购搭配、会场布置、四大金刚、婚宴服务、酒会招待等各个方面 ...
                                            </p>
                                        </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="news-content">
                            <li class="news-content-details">
                                <a href="">
                                        <span class="news-detail-img">
                                            <img src="http://pic.tdy.picdns.com/52-0146/news/201709/12/145554x4675.jpg@257w_126h_1e_1c.jpg" alt="">
                                        </span>
                                        <div class="news-detail-content">
                                            <em>| Sep,12,2017</em>
                                            <h3>好的婚礼策划师该如何发现？</h3>
                                            <p>
                                                你还在按部就班的举办婚礼吗？你还只是想要热热闹闹的聚会就当做婚礼吗？你不想要一场能一辈子回忆的婚礼吗？好的婚礼，选择一家好的婚庆公司很重要，而其中，婚礼策划师就是重中之重了。他们是否能够策划出符合新人个性的浪漫婚礼，是否能够有诸多的创意花絮。那么如何挑选 ...
                                            </p>
                                        </div>
                                </a>
                            </li>
                        </ul> -->
                    </div>
                    <!-- 婚礼筹办 -->
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import '~css/News.css';
</style>
<script>
export default {
  data () {
    return {
      list: [
        {
          to: '/news',
          newsTitle02: '新闻动态',
          newsTitle01: 'Recent News'
        },
        {
          to: '/preparation',
          newsTitle02: '婚礼筹备',
          newsTitle01: 'Preparation'
        },
        {
          to: '/starBroker',
          newsTitle02: '明星经纪',
          newsTitle01: 'Star Broker'
        }
      ],
      list1: [
        {
          to: '/newsNav1',
          title: '婚庆公司选择标准（一）'
        },
        {
          to: '/newsNav2',
          title: '准新人该如何预定婚宴酒席桌数'
        },
        {
          to: '/newsNav3',
          title: '婚宴陷阱知多少？'
        },
        {
          to: '/newsNav4',
          title: '4中婚礼场地任你选择'
        },
        {
          to: '/newsNav5',
          title: '好的婚礼策划师该如何发现？'
        }
      ],
      list2: [
        {
          to: '/newsNav1',
          imgs: 'http://pic.tdy.picdns.com/52-0146/news/201709/12/150042vBmVB.jpg@257w_126h_1e_1c.jpg',
          date: '| Sep,12,2017',
          title: '婚庆公司选择标准（一）',
          content: '婚庆公司选择标准（一）       现在新人结婚都是会是事先选择一个婚庆公司来操作婚礼的一些事情，而这里就婚庆公司就会显得很重要了，那么到底应该选择什么样的婚庆公司呢，这里小编来跟大家讲一下婚庆公司选择的标准有哪些。婚庆公司选择标准一：看婚庆 ...'
        },
        {
          to: '/newsNav2',
          imgs: 'http://pic.tdy.picdns.com/52-0146/news/201709/12/145858RrDz4.jpg@257w_126h_1e_1c.jpg',
          date: '| Sep,12,2017',
          title: '准新人该如何预定婚宴酒席桌数',
          content: '预定婚宴酒席桌数相信是每个准新人非常头疼的问题，即使对于不差钱的新人来说，你定多了空得太多了也不是很美观，而定的太少的情况，那就更尴尬了。下面就让欧诺拉福州婚庆公司给你支几招吧。招式一：酒席桌数按来宾预定1、一般来说，亲戚会全家到场，个别的也可以直接电话确'
        },
        {
          to: '/newsNav3',
          imgs: 'http://pic.tdy.picdns.com/52-0146/news/201709/12/145759h0IiL.jpg@257w_126h_1e_1c.jpg',
          date: '| Sep,12,2017',
          title: '婚宴陷阱知多少？',
          content: '对于一场婚礼来说，婚宴绝对是不可或缺的一部分，大多数的来宾都希望在婚宴中能够分享新人的喜庆。所以在预定婚宴的时候可千万马虎不得，而婚宴其中的这些陷阱你又了解吗？下面就和欧诺拉福州婚庆公司一起来看看吧。婚宴陷阱之——上菜速度的快慢猫腻你可能不知道酒店有时候 ...'
        },
        {
          to: '/newsNav4',
          imgs: 'http://pic.tdy.picdns.com/52-0146/news/201709/12/145702XrsbJ.jpg@257w_126h_1e_1c.jpg',
          date: '| Sep,12,2017',
          title: '4种婚礼场地任你选择',
          content: '第一种：一条龙服务这种一站式会所，讲究的就是一站式服务，轻松搞定。无需烦恼繁琐的筹备婚礼过程。真正意义上的一站式婚礼是基于一站式会所，能为新人提供一条龙婚礼服务，包括了婚礼策划、婚纱礼服定制、珠宝选购搭配、会场布置、四大金刚、婚宴服务、酒会招待等各个方面'
        },
        {
          to: '/newsNav5',
          imgs: 'http://pic.tdy.picdns.com/52-0146/news/201709/12/145554x4675.jpg@257w_126h_1e_1c.jpg',
          date: '| Sep,12,2017',
          title: '好的婚礼策划师该如何发现？',
          content: '你还在按部就班的举办婚礼吗？你还只是想要热热闹闹的聚会就当做婚礼吗？你不想要一场能一辈子回忆的婚礼吗？好的婚礼，选择一家好的婚庆公司很重要，而其中，婚礼策划师就是重中之重了。他们是否能够策划出符合新人个性的浪漫婚礼，是否能够有诸多的创意花絮。那么如何挑选'
        }
      ]
    }
  }
}
</script>
