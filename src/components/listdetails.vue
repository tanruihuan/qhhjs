<template>
  <div class="wrap">
		<headerall :headerinfo="infos.title"></headerall>
		<section class="mainNew mainNewBg">
			<div class="detailsNew-info">
				<div class="detailsNew-info-header"><i></i><span>预计年化收益</span><i></i></div>
				<div class="detailsNew-info-num">
					<strong>{{infos.incomea}}</strong><span>%</span>
				</div>
				<div class="detailsNew-info-bottom d-box">
					<div class="b-flex">
						<span>剩余金额</span>
						<p>{{infos.remainingamount}}万</p>
						<i></i>
					</div>
					<div class="b-flex">
						<span>期限</span>
						<p>{{infos.incometime}}天</p>
						<i></i>
					</div>
					<div class="b-flex">
						<span>项目金额</span>
						<p>{{infos.itemamount}}</p>
					</div>
				</div>
				<div class="detailsNew-info-tips">
					<i class="icon-19"></i><span>浮</span>
					<i class="icon-19"></i><span>7天可转</span>
					<i class="icon-19"></i><span>支持礼券</span>
				</div>
			</div>
			<div class="detailsNew-process d-box">
				<div class="b-flex">
					<b><i class="icon-20"></i></b>
					<p>预计起息日<br />{{infos.detailstime|formatDate}}</p>
					<span></span>
				</div>
				<div class="b-flex">
					<b><i class="icon-21"></i></b>
					<p>预计回款日<br />{{infos.detailstime|formatDate}}起<br />5个工作日内 </p>
					<span></span>
				</div>
				<div class="b-flex">
					<b><i class="icon-22"></i></b>
					<p>回款方式<br />一次还本付息 </p>
				</div>
			</div>
			<div class="detailsNew-form">
				<ul class="detailsNew-form-ul">
					<li><label>购买金额(元）</label><input type="text" name="" v-model="money" class="input" :placeholder="infos.investmentamount + '起投，'+ infos.topamount +'封顶'" /><em class="detailsNew-form-tips"><b>预计收益(元）</b><span>{{sum|tofixed2}}元</span><i class="icon-01"></i></em></li>
				</ul>
				<div class="detailsNew-remain"><strong>可用余额(元）</strong><span>{{infos.balance}}</span></div>
			</div>
			<div class="detailsNew-tab tabs-title d-box">
				<a href="javascript:;" class="b-flex" v-for="(tab,index) in infos.infos" :key="index" :class="{'on':onindex===index}" @click="tabs(index)">{{tab.tab}}</a>
			</div>
			<div class="detailsNew-tab-box">
				<div class="detailsNew-tab-con tabs-content" v-for="(cons,index) in infos.infos" :key="index" v-show="index === onindex">
					<div v-if="cons.con[0].title">
						<ul class="detailsNew-tab-ul">
							<li v-for="(tables,index) in cons.con" :key="index"><strong>{{tables.title}}</strong><span>{{tables.other}}</span></li>
						</ul>
					</div>
					<div v-else>
						<div class="detailsNew-tab-info">
							<p>{{cons.con}}</p>
						</div>
					</div>
				</div>
			</div>
			<span class="detailsNew-up"><i class="icon-17"></i>向上拖动 查看详情</span>
		</section>
		<aside class="mainNew-btn"><a href="javascript:;" @click="goto(infos.id)">立即投资</a></aside>
		<div class="tipsBox" id="errorTips"><span></span></div>
		<div class="wrap listdetailsConfirm" v-show="detailsconfirm">
			<headerall :headerinfo="detailsconfirmtitle" :statusnum="statusnum" @headerstatus="headerhide"></headerall>
			<section class="content">
				<div class="buyBox">
					<strong class="buyBox-title">详细信息</strong>
					<ul class="buyBox-list">
						<li><strong>投资金额</strong><span>{{money}}元</span></li>
						<li><strong>年化收益率</strong><span>{{infos.incomea}}%</span></li>
						<li><strong>投资期限</strong><span>{{infos.incometime}}天</span></li>
						<li><strong>预期收益</strong><span>{{sum|tofixed2}}元</span></li>
					</ul>
				</div>
				<!-- <div class="buyBox mt-10 borderT borderBn">
					<strong class="buyBox-title">礼金 <em class="couponTips">16张可用</em><span class="content-user-list-num">未使用</span><i class="icon-01"></i></strong>
				</div> -->
				<ul class="from-list mt-10 borderT">
					<li><label>交易密码</label><input type="password" name="" class="input" v-model="password" placeholder="6-20位含字母数字字符"></li>
				</ul>
				<p class="from-list-forget"><a href="#">忘记密码</a></p>
			</section>
			<p class="fixedBottom-money">可用余额：<span class="c-orange">{{infos.balance}}元</span></p>
			<div class="fixedBottom"><a href="javascript:;" @click="gook(infos.id)">确认投资</a></div>
			<div class="tipsBox" id="errorTips"><span></span></div>
		</div>
  </div>
</template>

<script>
import headerall from '@/components/common/header'
import {formatDate} from '@/assets/js/date.js'

export default {
  components: {
    headerall
  },
  data () {
    return {
			infos: [],
			onindex: 0,
			tabshow: false,
			money: '',
			password: '',
			detailsconfirm: false,
			detailsconfirmtitle: '确认购买',
			statusnum: 1
    }
  },
  created () {
    // console.log(this.$store.state.token)
    this.$model.list((data) => {
      console.log(data.listdata[this.$route.query.id])
      this.infos = data.listdata[this.$route.query.id]
    })
    // console.log(this.$route.params.id)
	},
	computed: {
		sum () {
			return this.money * this.infos.incomea / 100 * this.infos.incometime / 365
		}
	},
  methods: {
		tabs (index) {
			this.onindex = index
		},
		goto (id) {
			if (this.money === '') {
				this.$dialogs.alert('购买金额不能为空')
				return false
			} else if (this.money > this.infos.remainingamount * 10000) {
				this.$dialogs.alert('超过可用金额')
				return false
			} else if (this.money > this.infos.topamount) {
				this.$dialogs.alert('超过项目金额')
				return false
			} else {
				this.detailsconfirm = true
			}
		},
		gook (id) {
			if (this.password === '') {
				this.$dialogs.alert('请输入密码')
				return false
			} else if (this.password === window.localStorage['userpsw']) {
				this.$router.push({name: 'listdetails_ok', query: {id: id, money: this.money, sum: this.sum}})
			} else {
				this.$dialogs.alert('密码输入错误')
				return false
			}
		},
		headerhide (val) {
			this.detailsconfirm = val
		}
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
	},
	tofixed2 (value) {
		return parseFloat(value).toFixed(2)
	}
  }
}
</script>
