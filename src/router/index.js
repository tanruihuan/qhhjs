import Vue from 'vue'
// import store from '@/store/store'
import Router from 'vue-router'

Vue.use(Router)

// // 页面刷新时，重新赋值token
// if (sessionStorage.getItem('token')) {
//   store.commit('set_token', sessionStorage.getItem('token'))
//   // console.log(store.state.token)
// }

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'registered',
      component: (resolve) => {
        require(['@/components/registered.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => {
        require(['@/components/login.vue'], resolve)
      }
    },
    {
      path: '/list',
      name: 'list',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['@/components/list.vue'], resolve)
      }
    },
    {
      path: '/listdetails',
      name: 'listdetails',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['@/components/listdetails.vue'], resolve)
      }
    },
    {
      path: '/listdetails_ok',
      name: 'listdetails_ok',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['@/components/listdetails_ok.vue'], resolve)
      }
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['@/components/usercenter.vue'], resolve)
      }
    },
    {
      path: '/investmentlist',
      name: 'investmentlist',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['@/components/investmentlist.vue'], resolve)
      }
    },
    {
      path: '/investmentlistinfo',
      name: 'investmentlistinfo',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['@/components/investmentlistinfo.vue'], resolve)
      }
    }
  ]
})
