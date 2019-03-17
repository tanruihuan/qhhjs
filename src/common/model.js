import axios from '@/common/axios'
// import dialogs from '@/common/dialogs'

var model = {
  login (json, callback) {
    // axios.get('/news/index2', json).then(res => {
    axios.post('/news/login', json).then(res => {
      callback(res)
      // console.log(json)
    })
  },
  registereds (json, callback) {
    // axios.get('/news/index2', json).then(res => {
    axios.post('/news/registered', json).then(res => {
      callback(res)
      // console.log(json)
    })
  },
  times (json, callback) {
    axios.post('/news/time', json).then(res => {
      callback(res)
      // console.log(json)
    })
  },
  list (callback) {
    axios.get('/news/list').then(res => {
      callback(res)
      // console.log(json)
    })
  },
  userindex (callback) {
    axios.get('/news/userindex').then(res => {
      callback(res)
      // console.log(json)
    })
  },
  userinvestmentlist (callback) {
    axios.get('/news/userinvestmentlist').then(res => {
      callback(res)
      // console.log(json)
    })
  },
  detaillist (callback) {
    axios.get('/news/detail').then(res => {
      callback(res)
      // console.log(json)
    })
  }
}

export default model
