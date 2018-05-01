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
    <div class="title-show">{{$t('baseInfo.cms-title')}}</div>
    <div class="login-form">
      <form name ='form' action="">
        <el-row :gutter ="10" class="login-icon-hight">
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div><img src="../assets/cms-login.png" class="login-img"/></div></el-col>
        </el-row>
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
          <el-col :xs="2" :sm="3" :md="5" :lg="3" :xl="6"><el-button type="primary" @click="login" size="medium" icon="el-icon-success">{{$t('message.login')}}</el-button></el-col>
          <el-col :xs="2" :sm="3" :md="5" :lg="3" :xl="5"><el-button type="primary" @click="rigist" size="medium" icon="el-icon-zoom-in">{{$t('message.register')}}</el-button></el-col>
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
      }, 1000)
    },
    changeLang (language) {
      localStorage.setItem('lang', language)
      this.$i18n.locale = language
    },
    errorMsgShow (errorMsg) {
      this.$message({
        message: errorMsg,
        type: 'error',
        showClose: true
      })
    },
    msgShow (msg) {
      this.$message({
        message: msg,
        showClose: true
      })
    }
  }
}

</script>

<style>
  .login-icon-hight{
    margin-top: 0px;
  }
  .row-hight{
    margin-top: 20px;
    margin-left: 5%;
    /*margin-right: -7.5px;*/
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
    width: 130px;
  }
  .title-show{
    font-size: xx-large;
    text-align: center;
    color: white;
    font-family: "Segoe UI Black";
    position: absolute;
    top: -70px;
    z-index: 999;
    margin-left: 8%;
    width: 500px;
  }
  .login-form{
    padding-left: 30%;
    margin-top: -15%;
  }
  .login-p{
    font-size: xx-small;
    font-family: Consolas;
  }
  .login-img{
    width: 150px;
    height: 150px;
    margin-left: 18%;
  }
</style>
