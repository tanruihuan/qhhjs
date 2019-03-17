<template>
  <div>
    <header class="header">
      <a href="#" class="header-left-size">电脑版</a>
      <h1><img src="@/assets/images/logo.png" alt="" title="" /></h1>
      <a href="#" class="header-right header-right-size">去投资</a>
    </header>
    <section class="content content-index">
      <!-- <div id="banner" class="banner">
        <div class="hd">
          <ul></ul>
        </div>
        <div class="bd">
          <ul>
            <li><a href="#"><img src="@/assets/images/ad1.jpg" /></a></li>
            <li><a href="#"><img src="@/assets/images/ad2.jpg"/></a></li>
          </ul>
        </div>
      </div> -->
      <swiper class='swiImgs' :options="swiperOption" v-if="commodity.length!=0">
        <swiper-slide v-for="(item, index) in commodity" data-index="index" :key="index" class="item">
          <img class='swiImg' :src='item' />
        </swiper-slide>
        <div class="swiper-scrollbar"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination" v-for="(item,index) in commodity" :key="index" slot="pagination"></div>
      </swiper>
      <!-- <span class='swiText' v-if='commodity'>{{imgIndex}}/{{commodity.length}}</span> -->
      <div class="header-info">注册即获<span class="c-orange">170</span>元红包，新手标高达<span class="c-orange">15%</span>收益</div>
      <ul class="login-from login-from-margin">
        <li><label>手机号</label><input type="text" v-model="registered.username" name="" class="input" placeholder="请输入手机号" /></li>
        <li class="login-from-last"><label>密码</label><input type="password" v-model="registered.userpsw" name="" class="input" placeholder="请输入密码"  /></li>
        <li><label>验证码</label><input type="text" v-model="registered.usercode" name="" class="input" placeholder="请输入验证码" /><img src="@/assets/images/img_01.jpg" alt="" title="" class="verification-img" /></li>
        <li><label>短信验证</label><input type="text" v-model="registered.userphonecode" name="" class="input" placeholder="请进行短信认证" /><a href="javascript:;" class="verification" :class="{disabled: !this.canClick}" @click.stop="timeup">{{content}}</a></li>
      </ul>
      <p class="login-from-bottom"><input type="checkbox" name="" v-model="registered.usercheck" /><label>我已阅读并同意<span>&lt;&lt;前海航交所服务协议&gt;&gt;</span></label></p>
      <a href="javascript:;" @click="registereds" class="login-from-button">立即注册</a>
      <p class="login-from-forget"><router-link tag="a" to="/login">已有账号，现在登录</router-link></p>
      <div class="aboutUs-line"></div>
      <div class="aboutUs">
        <strong class="aboutUs-titles">前海航交所是谁？</strong>
        <div class="aboutUs-con">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;世界500强企业海航集团旗下金融平台，深圳市金融办监管的交易场所持牌机构，公司注册资本1亿元，打造个人和机构投融资着的妆液互联网金融平台。
        </div>
        <strong class="aboutUs-titleOne">
          <em>新手专区</em>
          <span>新手福利 专属体验</span>
        </strong>
        <ul class="aboutUs-infoList">
          <li>新手福利：一个月左右超短体验期，劲享年收益15%。</li>
          <li>专属体验：1000元超低门槛。</li>
          <li>零手续费：暂免所有费用。</li>
        </ul>
        <strong class="aboutUs-titleTwo">
          <em>投资专区</em>
          <span>超高收益，安全稳赚</span>
        </strong>
        <ul class="aboutUs-infoList">
          <li>稳定收益：4-6个月投资体验，劲享年收益8%-15%。</li>
          <li>安心体验：1000元超低门槛。</li>
          <li>零手续费：暂免所有费用。</li>
        </ul>
        <!-- <strong class="aboutUs-titleThree">
          <em>转让专区</em>
          <span>灵活转让，极致体验</span>
        </strong>
        <ul class="aboutUs-infoList">
          <li>灵活收益：投资一个月即可转让，投资收益灵活。</li>
          <li>贴心体验：持有30天后可转让，同时可以反悔立即撤销。</li>
          <li>零手续费：暂免所有费用。</li>
        </ul> -->
        <div class="aboutUs-bottom">
          <a href="#">下载APP</a><a href="#">电脑版</a>
        </div>
      </div>
    </section>
    <footer class="footer">前海航交所 为您投资保驾护航的线上交易所 <br />海航集团 成员企业</footer>
    <div class="tipsBox" id="errorTips"><span></span></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

export default {
  components: {
    swiper,
    swiperSlide
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
      registered: {
        username: '',
        userpsw: '',
        usercode: '',
        userphonecode: '',
        usercheck: false
      },
      content: '获取验证码',
      totalTime: '',
      canClick: true
    }
  },
  created () {
    this.swiperOption.autoplay = this.commodity.length !== 1 ? { // 控制只有一张图片的时候不自动轮播
      delay: 1500,
      stopOnLastSlide: false,
      disableOnInteraction: false
    } : false
  },
  methods: {
    registereds () {
      // console.log(this.registered)
      // 手机验证
      let rega = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      // 密码验证
      let regb = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
      if (this.registered.username === '') {
        this.$dialogs.alert('手机号不能为空')
        return false
      } else if (!rega.test(this.registered.username)) {
        this.$dialogs.alert('手机格式不正确')
        return false
      } else if (this.registered.userpsw === '') {
        this.$dialogs.alert('密码不能为空')
        return false
      } else if (!regb.test(this.registered.userpsw) || this.registered.userpsw.length < 6 || this.registered.userpsw.length > 12) {
        this.$dialogs.alert('密码必须为6-12位的数字和字母的组合')
        return false
      } else if (this.registered.usercode === '') {
        this.$dialogs.alert('验证码不能为空')
        return false
      } else if (this.registered.usercode !== 'ersuq') {
        this.$dialogs.alert('验证码出错')
        return false
      } else if (this.registered.userphonecode === '') {
        this.$dialogs.alert('短信验证码不能为空')
        return false
      } else if (this.registered.usercheck === false) {
        this.$dialogs.alert('请同意前海航交所服务协议')
        return false
      } else {
        this.$model.registereds(this.registered, (data) => {
          if (data.status === '1') {
            this.$store.commit('set_token', data.token)
            localStorage.setItem('username', this.registered.username)
            localStorage.setItem('userpsw', this.registered.userpsw)
            this.$router.push(data.url)
          }
        })
      }
    },
    timeup () {
      // 手机验证
      let rega = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      // 密码验证
      let regb = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
      if (this.registered.username === '') {
        this.$dialogs.alert('手机号不能为空')
        return false
      } else if (!rega.test(this.registered.username)) {
        this.$dialogs.alert('手机格式不正确')
        return false
      } else if (this.registered.userpsw === '') {
        this.$dialogs.alert('密码不能为空')
        return false
      } else if (!regb.test(this.registered.userpsw) || this.registered.userpsw.length < 6 || this.registered.userpsw.length > 12) {
        this.$dialogs.alert('密码必须为6-12位的数字和字母的组合')
        return false
      } else if (this.registered.usercode === '') {
        this.$dialogs.alert('验证码不能为空')
        return false
      } else if (this.registered.usercode !== 'ersuq') {
        this.$dialogs.alert('验证码出错')
        return false
      } else {
        let timenum = {
          username: this.registered.username,
          userpsw: this.registered.userpsw,
          usercode: this.registered.usercode
        }
        this.$model.times(timenum, (data) => {
          this.totalTime = data.time
          this.registered.userphonecode = data.num
          // 改动的是这两行代码
          if (!this.canClick) return
          this.canClick = false
          this.content = this.totalTime + '秒'
          let clock = window.setInterval(() => {
            this.totalTime--
            this.content = this.totalTime + '秒'
            if (this.totalTime < 0) {
              window.clearInterval(clock)
              this.content = '获取验证码'
              this.totalTime = 10
              // 这里重新开启
              this.canClick = true
            }
          }, 1000)
        })
      }
    }
  }
}
</script>
