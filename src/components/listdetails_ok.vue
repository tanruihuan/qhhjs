<template>
  <div class="wrap">
		<headerall :headerinfo="detailsconfirmtitleok"></headerall>
		<section class="mainNew">
			<div class="investSuccessNew">
				<div class="investSuccessNew-t">
					<i class="icon-19"></i>
					<p>投资申请已提交成功</p>
				</div>
			</div>
			<div class="investSuccessNew-list">
				<ul>
					<li>
						<strong class="investSuccessNew-list-label">订单号</strong>
						<span class="investSuccessNew-list-span">{{infos.ordernumber}}</span>
					</li>
					<li>
						<strong class="investSuccessNew-list-label">项目名称</strong>
						<span class="investSuccessNew-list-p">{{infos.title}} -应收账款收益权产品</span>
					</li>
					<li>
						<strong class="investSuccessNew-list-label">投资金额</strong>
						<span class="investSuccessNew-list-span c-orange">{{money}}元</span>
					</li>
					<li>
						<strong class="investSuccessNew-list-label">预计收益</strong>
						<span class="investSuccessNew-list-span">{{sum|tofixed2}}元</span>
					</li>
					<!-- <li>
						<strong class="investSuccessNew-list-label">预期奖励</strong>
						<div class="investSuccessNew-list-con">
							<span>20元</span>
							<p>预计每周三(工作日)发放</p>
						</div>
					</li> -->
				</ul>
			</div>
			<div class="investSuccessNew-btn d-box">
				<div class="b-flex"><router-link tag="a" to="usercenter" class="b-flex">查看交易记录</router-link></div>
				<div class="b-flex"><router-link tag="a" to="list" class="b-flex">继续申购</router-link></div>
			</div>
		</section>
  </div>
</template>

<script>
import headerall from '@/components/common/header'

export default {
  components: {
    headerall
  },
  data () {
    return {
			infos: [],
			detailsconfirmtitleok: '投资申请成功',
			money: '',
			sum: ''
    }
  },
  created () {
    // console.log(this.$store.state.token)
    this.$model.list((data) => {
      console.log(data.listdata[this.$route.query.id])
      this.infos = data.listdata[this.$route.query.id]
		})
		this.money = this.$route.query.money
		this.sum = this.$route.query.sum
		console.log(this.money)
		console.log(this.sum)
	},
  methods: {
		goto () {
		}
  },
  filters: {
		tofixed2 (value) {
      return parseFloat(value).toFixed(2)
		}
  }
}
</script>
