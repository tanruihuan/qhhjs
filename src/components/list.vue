<template>
  <div class="wrap">
    <section id="scroll" class="mainNew">
			<swiper class='swiImgs' :options="swiperOption" v-if="commodity.length!=0">
				<swiper-slide v-for="(item, index) in commodity" data-index="index" :key="index" class="item">
				<img class='swiImg' :src='item' />
				</swiper-slide>
				<div class="swiper-scrollbar"></div>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-pagination" v-for="(item,index) in commodity" :key="index" slot="pagination"></div>
			</swiper>
			<ul class="listNew">
				<li v-for="(item,index) in lists" :key="index" @click="todetail(item.id)">
					<h3>{{item.title}}</h3>
					<div class="listNew-box d-box">
						<div class="b-flex">
							<div class="listNew-num"><strong>{{item.incomea}}</strong><span>% <b v-if="item.status != 0">+ {{item.incomeb}}%</b></span></div>
							<p>预期年化收益</p>
						</div>
						<div class="b-flex">
							<div class="listNew-num"><strong>{{item.incometime}}</strong><span>天</span></div>
							<p>投资期限</p>
						</div>
					</div>
					<div class="listNew-bar">
						<div class="listNew-bar-box">
							<span :style="{width:'' + item.progressbar + '%'}" ><b><i></i></b></span>
						</div>
						<em>{{item.progressbar}}%</em>
					</div>
					<div class="listNew-bottom">
						起投{{item.investmentamount}}元
						<span>剩余 {{item.remainingamount}}万</span>
					</div>
				</li>
			</ul>
		</section>
		<fooderall></fooderall>
  </div>
</template>

<script>
import fooderall from '@/components/common/fooder'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

export default {
  components: {
    swiper,
    swiperSlide,
    fooderall
  },
  data () {
    return {
      commodity: [
        'https://www.as-exchange.com/Style/wechat/images/ad1.jpg',
        'https://www.as-exchange.com/Style/wechat/images/ad2.jpg',
        'https://www.as-exchange.com/Style/wechat/images/ad1.jpg',
        'https://www.as-exchange.com/Style/wechat/images/ad2.jpg'
      ],
      imgIndex: 1,
      swiperOption: {
        // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // 循环
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 滑动速度
        speed: 800,
        // 滑动方向
        direction: 'horizontal',
        // 小手掌抓取滑动
        grabCursor: true,
        on: {
          slideChangeTransitionStart: function () {
            // 获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
            this.imgIndex = this.realIndex + 1
          }
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      },
      lists: []
    }
  },
  created () {
    this.swiperOption.autoplay = this.commodity.length !== 1 ? { // 控制只有一张图片的时候不自动轮播
      delay: 1500,
      stopOnLastSlide: false,
      disableOnInteraction: false
    } : false
    this.$model.list((data) => {
      this.lists = data.listdata
      // console.log(data.listdata)
    })
  },
  methods: {
    todetail (id) {
      // 列表页带参数跳转
      this.$router.push({name: 'listdetails', query: {id: id}})
    }
  },
  mounted () {
    // 缓存指针
    // let _this = this
    // 设置一个开关来避免重负请求数据
    let sw = true
    // 注册scroll事件并监听
    document.getElementById('scroll').addEventListener('scroll', () => {
      // console.log(document.documentElement.clientHeight + '-----------' + window.innerHeight) // 可视区域高度
      // console.log(document.getElementById('scroll').scrollTop) // 滚动高度
      // console.log(document.getElementById('scroll').scrollHeight) // 文档高度
      // 判断是否滚动到底部
      if (document.getElementById('scroll').scrollTop + window.innerHeight >= document.getElementById('scroll').scrollHeight) {
        // console.log(sw);
        // 如果开关打开则加载数据
        if (sw === true) {
          // 将开关关闭
          sw = false
          this.$model.list((data) => {
            // console.log(data.listdata)
            // this.lists.push(data.listdata)
            // 将新获取的数据push到vue中的data，就会反应到视图中了
            data.listdata.forEach((val) => {
              this.lists.push(val)
            })
            console.log(this.lists)
            sw = true
          })
          // axios.get('http://localhost:3000/proxy?url=http://news.at.zhihu.com/api/4/news/before/20170608').then((response) => {
          //   console.log(JSON.parse(response.data))
          //   // 将新获取的数据push到vue中的data，就会反应到视图中了
          //   JSON.parse(response.data).stories.forEach((val, index) => {
          //     _this.articles.push(val)
          //     // console.log(val);
          //   })
          //   // 数据更新完毕，将开关打开
          //   sw = true
          // }).catch((error) => {
          //   console.log(error)
          // })
        }
      }
    })
  }
}
</script>
