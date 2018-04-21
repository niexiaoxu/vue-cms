<template>
  <div class="login">
    <form name = 'form' action="">
      <el-input placeholder="请输入手机号码或用户名" type="text" v-model="account" clearable></el-input>
      <el-input placeholder="请输入密码" type="password" v-model="password" clearable></el-input>
      <el-button type="primary" @click="openFullScreen">登录</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    openFullScreen () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}

</script>

<style></style>
