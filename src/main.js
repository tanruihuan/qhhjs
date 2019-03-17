// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import model from '@/common/model'
import dialogs from '@/common/dialogs'

import '@/assets/css/mainNew.css'
import '@/assets/css/styleNew.css'

// 调用封装的axios
Vue.prototype.$model = model
// 调用弹出框
Vue.prototype.$dialogs = dialogs

// 引入mockjs
require('@/mock/mock.js')

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 判断本地是否存在access_token
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      if (to.path === '/login' || to.path === '/') {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  } else {
    next()
  }
  // 如果本地 存在 token 则 不允许直接跳转到 登录页面
  if (to.fullPath === '/login' || to.fullPath === '/') {
    if (localStorage.getItem('access_token')) {
      next({
        path: '/list'
      })
      console.log(from.fullPath)
    } else {
      next()
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
