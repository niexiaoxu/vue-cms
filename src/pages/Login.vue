<template>
  <div class="login-div">
    <div class="right-show">
      <el-select v-model="language" placeholder="请选择语言" size="medium"  @change="changeLang(language)">
        <el-option v-for="item in options"
                   :key="item.language"
                   :label="item.label"
                   :value="item.language">
        </el-option>
      </el-select>
    </div>
    <div class="login-form">
      <form name ='form' action="">
        <el-row :gutter ="20" class="row-hight">
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><el-input :placeholder="$t('placeHolder.account')" v-model="account" clearable></el-input></el-col>
        </el-row>
        <el-row :gutter ="20" class="row-hight">
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><el-input :placeholder="$t('placeHolder.password')" v-model="password" clearable></el-input></el-col>
        </el-row>
        <el-row :gutter ="20" class="row-hight-message">
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><p class="login-p">{{$t('message.forgetPassword')}}</p></el-col>
        </el-row>
        <el-row :gutter ="15" class="row-hight">
          <el-col :xs="2" :sm="3" :md="5" :lg="3" :xl="4"><el-button type="primary" @click="login" size="medium" icon="el-icon-success">{{$t('message.login')}}</el-button></el-col>
          <el-col :xs="2" :sm="3" :md="5" :lg="3" :xl="7"><el-button type="primary" @click="rigist" size="medium" icon="el-icon-zoom-in">{{$t('message.register')}}</el-button></el-col>
        </el-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: '',
      options: [{
        language: 'cn',
        label: '中文'
      }, {
        language: 'en',
        label: '英语'
      }],
      language: localStorage.lang || '选择语言'
    }
  },
  methods: {
    login () {
      if (this.account && this.password) {
        this.openFullScreen()
      } else if (!this.account) {
        this.errorMsgShow(this.$t('erroMesg.account-error'))
      } else if (!this.password) {
        this.errorMsgShow(this.$t('erroMesg.password-error'))
      }
    },
    rigist () {
      this.msgShow(this.$t('message.default-regist-message'))
    },
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
    },
    changeLang (language) {
      localStorage.setItem('lang', language)
      this.$i18n.locale = language
    },
    errorMsgShow (errorMsg) {
      this.$message({
        message: errorMsg,
        type: 'error'
      })
    },
    msgShow (msg) {
      this.$message(msg)
    }
  }
}

</script>

<style>
  .row-hight{
    margin-top: 20px;
  }
  .row-hight-message{
    margin-top: 1px;
  }
  .login-div{
    padding: 192px 237px;
    margin: 90px 257px;
  }
  .right-show{
    position:absolute;
    right: 30px;
    top: -75px;
    z-index:999;
  }
  .login-form{
    padding-left: 30%;
  }
  .login-p{
    font-size: xx-small;
    font-family: Consolas;
  }
</style>
