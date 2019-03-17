<template>
  <div>
    <header class="headerNew">
      <a href="javascript:;" class="headerNew-l icon-01" @click="onClickLeft"></a>
      <strong>{{headerinfo}}</strong>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    headerinfo: {
      type: String
    },
    statusnum: {
      type: Number
    }
  },
  data () {
    return {
      status: false
    }
  },
  created () {
    // console.log(this.$store.state.token)
    console.log(this.statusnum)
  },
  methods: {
    onClickLeft () {
      if (this.statusnum === 1) {
        this.$emit('headerstatus', this.status)
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
