<template>
  <div>
    <header class="header">
      <h1>登录</h1>
      <router-link tag="a" to="/" class="header-right">注册</router-link>
    </header>
    <section class="content">
      <a href="#" class="logo"><img src="@/assets/images/logo.png" alt="" title="" /></a>
      <ul class="login-from">
        <li><label>账号</label><input type="text" v-model="userlogin.username" name="" class="input" placeholder="请输入手机号/用户名" /></li>
        <li><label>密码</label><input type="password" v-model="userlogin.userpsw" name="" class="input" placeholder="请输入登录密码" maxlength="16" /></li>
      </ul>
      <a href="javascript:;" @click="login" class="login-from-button">立即登录</a>
      <p class="login-from-forget"><a href="#">忘记密码？</a></p>
    </section>
    <footer class="footer">前海航交所 为您投资保驾护航的线上交易所 <br />海航集团 成员企业</footer>
    <div class="tipsBox" id="errorTips"><span></span></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '登录页',
      userlogin: {
        username: '',
        userpsw: ''
      }
    }
  },
  created () {
    // console.log(this.$store.state.token)
  },
  methods: {
    login () {
      if (this.userlogin.username === '') {
        this.$dialogs.alert('手机号/用户名不能为空')
        return false
      } else if (this.userlogin.userpsw === '') {
        this.$dialogs.alert('密码不能为空')
        return false
      }
      this.$model.login(this.userlogin, (data) => {
        if (this.userlogin.username !== data.username && this.userlogin.userpsw !== data.userpsw) {
          this.$dialogs.alert('用户名密码不正确')
        } else {
          this.$store.commit('set_token', data.token)
          localStorage.setItem('username', this.userlogin.username)
          localStorage.setItem('userpsw', this.userlogin.userpsw)
          this.$router.push(data.url)
        }
      })
    }
  }
}
</script>
