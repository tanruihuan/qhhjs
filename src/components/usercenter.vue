<template>
  <div>
    <section class="mainNew">
			<div class="userNew-header">
				<img src="@/assets/images/haimian/userheader_01.png" alt="" title="" />
				<a href="javascript:;" class="icon-12"></a>
				<div class="userNew-header-con">
					<strong class="strongs"><span>总资产(元)</span><a href="javascript:;" class="userNew-header-tips icon-13" @click="toggleshow"></a></strong>
					<p><span v-show="vshow">{{allmoney|format}}</span><b v-show="vhide">****</b></p>
					<div class="d-box">
						<div class="b-flex">
							<strong>我的收益(元)</strong>
							<p><span v-show="vshow">{{income|format}}</span><b v-show="vhide">****</b></p>
						</div>
						<div class="b-flex">
							<strong>账户余额(元)</strong>
							<p><span v-show="vshow">{{balance|format}}</span><b v-show="vhide">****</b></p>
						</div>
					</div>
				</div>
			</div>
			<div class="userNew-header-btn d-box">
				<div class="b-flex"><a href="#">取现</a></div>
				<div class="b-flex"><a href="#">充值</a></div>
			</div>
			<div class="userNew-list">
				<ul>
          <router-link tag="li" to="investmentlist">
            <b class="icon-06"></b>
            <span>我的投资</span>
            <i class="icon-01"></i>
          </router-link>
					<li>
						<a href="#">
							<b class="icon-07"></b>
							<span>资金明细</span>
							<i class="icon-01"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<b class="icon-08"></b>
							<span>我的礼券</span>
							<i class="icon-01"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<b class="icon-09"></b>
							<span>邀请返利</span>
							<i class="icon-01"></i>
						</a>
					</li>
				</ul>
			</div>
			<div class="userNew-list">
				<ul>
					<li>
						<a href="#">
							<b class="icon-10"></b>
							<span>账户设置</span>
							<i class="icon-01"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<b class="icon-11"></b>
							<span>关于我们</span>
							<i class="icon-01"></i>
						</a>
					</li>
				</ul>
			</div>
			<div class="userNew-time">
				<span>在线客服</span>
				<p>工作日9:00-18:00</p>
			</div>
		</section>
    <fooderall></fooderall>
  </div>
</template>

<script>
import fooderall from '@/components/common/fooder'

export default {
  components: {
    fooderall
  },
  data () {
    return {
      allmoney: '',
      income: '',
      balance: '',
      vshow: true,
      vhide: false
    }
  },
  created () {
    this.$model.userindex((data) => {
      this.allmoney = data.allmoney
      this.income = data.income
      this.balance = data.balance
      // console.log(data)
    })
  },
  methods: {
    toggleshow () {
      this.vshow = !this.vshow
      this.vhide = !this.vhide
    }
  },
  filters: {
    format (val) {
      // let result = [ ]
      // let counter = 0
      // val = (val || 0).toString().split('')
      // for (var i = val.length - 1; i >= 0; i--) {
      //     counter++
      //     result.unshift(val[i])
      //     if (!(counter % 3) && i !== 0) { result.unshift(',') }
      // }
      // return result.join('')
      return (val || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
  }
}
</script>
