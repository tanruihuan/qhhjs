import axios from 'axios'
import store from '@/store/store'
import router from 'vue-router'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// axios.defaults.headers.common['Authentication-Token'] = store.state.token

// 请求拦截器
axios.interceptors.request.use((config) => {
  // 判断是否存在token，如果存在将每个页面header都添加token
  if (store.state.token) {
    config.headers.common['Authentication-Token'] = store.state.token
  }
  // console.log(store.state.token)
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use((response) => {
  // console.log(response)
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        this.$store.commit('del_token')
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject(error.response.data)
})

// 封装axios的post请求
export function axiospost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// 封装axios的get请求
export function axiosget (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(response => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  post (url, params) {
    return axiospost(url, params)
  },
  get (url) {
    return axiosget(url)
  }
}
