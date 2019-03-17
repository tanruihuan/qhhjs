<template>
  <div class="footerNew">
    <div class="d-box">
      <router-link v-for="(item,index) in menuname" :key="index" :to="item.url" class="b-flex">
        <i :class="item.icon"></i>
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuname: [
        {
          name: '投资',
          icon: 'icon-04',
          url: '/list'
        },
        {
          name: '我的',
          icon: 'icon-02',
          url: '/usercenter'
        }
      ],
      onindex: 0
    }
  }
}
</script>
