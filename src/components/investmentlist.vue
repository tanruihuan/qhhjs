<template>
  <div>
    <section id="scroll" class="mainNew">
			<div class="userNew-header">
				<img src="@/assets/images/haimian/userheader_02.png" alt="" title="" />
				<a href="javascript:;" class="icon-01" @click="$router.go(-1)"></a>
				<a href="javascript:;" class="icon-15"></a>
				<div class="userNew-header-con">
					<strong><span>定期资产(元)</span></strong>
					<p><span>{{allmoney|format}}</span></p>
					<div class="d-box">
						<div class="b-flex">
							<strong>待收收益(元)</strong>
							<p><span>{{income|format}}</span></p>
						</div>
						<div class="b-flex">
							<strong>冻结余额(元)</strong>
							<p><span>{{freeze|format}}</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="userNew-tips" v-show="tipsshow">定期项目到期后1-5个工作日回款至账户余额 <a href="javascript:;" class="icon-16" @click="tipsshow = !tipsshow"></a></div>
			<div class="userNew-tab d-box">
				<a href="javascript:;" class="b-flex" v-for="(tabs,index) in investmentlist" :key="index" :class="{'on':onindex === index}" @click="tabsclick(index)">{{tabs.name}}</a>
			</div>
			<div class="userNew-tab-box userNew-tab-bottom">
				<div class="userNew-tab-con tabs-content" v-for="(lists,index) in investmentlist" :key="index" v-show="onindex === index">
					<ul>
						<li class="userNew-tab-con-li" v-for="(item,index) in lists.info" :key="index">
							<a href="#" class="userNew-tab-con-title">{{item.title}} <span>{{item.status}} <i class="icon-01"></i></span></a>
							<ul>
								<li>
									<strong>预期年化</strong>
									<span class="c-orange">{{item.income}}%</span>
								</li>
								<li>
									<strong>投标金额</strong>
									<span class="c-orange">{{item.money}}元</span>
								</li>
								<li>
									<strong>投标日期</strong>
									<span>{{item.starttime}}</span>
								</li>
								<li>
									<strong>回款日期 </strong>
									<span>{{item.endtime}}</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<!-- <div class="userNew-exchange-bottom d-box">
				<div class="b-flex"><a href="#">快速转让</a></div>
			</div> -->
		</section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allmoney: '',
      income: '',
			freeze: '',
			investmentlist: [],
			onindex: 0,
			tipsshow: true
    }
  },
  created () {
    this.$model.userinvestmentlist((data) => {
      this.allmoney = data.allmoney
      this.income = data.income
			this.freeze = data.freeze
			this.investmentlist = data.investmentlist
			// console.log(this.investmentlist)
		})
		this.$store.commit('investmentlist', this.onindex)
  },
  methods: {
		tabsclick (index) {
			this.onindex = index
			this.$store.commit('investmentlist', this.onindex)
		}
	},
	mounted () {
    // 缓存指针
    // let _this = this
    // 设置一个开关来避免重负请求数据
    let sw = true
    // 注册scroll事件并监听
    window.addEventListener('scroll', () => {
      // console.log(document.documentElement.clientHeight + '-----------' + window.innerHeight) // 可视区域高度
      // console.log(document.getElementById('scroll').scrollTop) // 滚动高度
      // console.log(document.getElementById('scroll').scrollHeight) // 文档高度
      // 判断是否滚动到底部
      if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight) {
        if (sw === true) {
          // 将开关关闭
          sw = false
          this.$model.userinvestmentlist((data) => {
						this.investmentlist[this.$store.state.investmentlistnum].info.forEach((val) => {
							this.investmentlist[this.$store.state.investmentlistnum].info.push(val)
						})
						// console.log(data.investmentlist)
            sw = true
          })
        }
      }
    })
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
