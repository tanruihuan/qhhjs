<template>
  <div>
    <header class="headerNew">
			<a href="javascript:;" class="headerNew-l icon-01"></a>
			<strong>资产明细 </strong>
		</header>
		<section class="content">
			<ul class="assetDetails">
				<li v-for="(item,index) in detail" :key="index">
					<strong class="assetDetails-title"><em>{{item.title}}</em></strong>
					<p class="assetDetails-p">{{item.time}}</p>
					<span class="assetDetails-time" :class="{'on':item.status != 0}"><b v-if="item.status != 0">+</b><b v-else>-</b>{{item.money}}元</span>
					<em class="assetDetails-status">剩余：{{item.balance}}元</em>
				</li>
			</ul>
		</section>
  </div>
</template>

<script>
export default {
  data () {
    return {
			detail: []
    }
  },
  created () {
    this.$model.detaillist((data) => {
			this.detail = data.detail
			console.log(data)
		})
  },
  methods: {
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
          this.$model.detaillist((data) => {
						this.detail.forEach((val) => {
							this.detail.push(val)
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
