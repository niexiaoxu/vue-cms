<template>
  <div class="login-wrap">
    <!--头部-->
    <div class="login-head">
      <el-row :gutter="110">
        <!--标题-->
        <el-col :xs="18" :sm="20" :md="20" :lg="20" :xl="20" >
          <div class="login-top-ms">{{$t('baseInfo.cms-title')}}</div>
        </el-col>
        <!--语言栏-->
        <el-col :xs="3" :sm="4" :md="4" :lg="4" :xl="4" >
        <el-select v-model="language" size="medium" @change="changeLang(language)">
          <el-option v-for="item in options" :key="item.language" :label="item.label" :value="item.language">
          </el-option>
        </el-select>
        </el-col>
      </el-row>
    </div>
    <!--form-->
    <div class="login-form">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="45px" class="el-define-form">
        <el-form-item label="账号:" prop="account">
          <el-input type="text" v-model="ruleForm.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">{{$t('message.login')}}</el-button>
          <el-button @click="resetForm('ruleForm')">{{$t('message.reset')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var checkAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var checkPassWord = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      options: [{
        language: 'cn',
        label: '中文'
      }, {
        language: 'en',
        label: '英语'
      }],
      language: localStorage.lang || '语言',
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { validator: checkAccount, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassWord, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.openFullScreen()
          setTimeout(() => {
            this.$router.push('home')
          }, 1000)
          // this.msgShow("success..");
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .login-head{
    background-color: black; height: 10%;
    padding-top: 1%;
  }
  .login-top-ms {
    font-size: x-large;
    /*text-align: center;*/
    color: white;
    /*margin-left: 9%;*/
    /*align-content: center;*/
    font-family: "Lao UI";
    width: 40%;
    margin-left: 41%;
    text-align: center;
  }
  .login-form {
    position: absolute;
    left: 35%;
    top: 30%;
    width: 22%;
    height: 25%;
    /*margin: 0px 0 0 -190px;*/
    padding: 40px;
    border-radius: 5px;
    background: #fff;

    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
    0 .5em 1em rgba(0, 0, 0, 0.6);
    text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
    background: hsla(0,0%,100%,.3);
  }
  .el-define-form{
    margin-top: 10%;
    /*margin: 12% 1%;*/
    /*margin-left: -16%;*/
    /*margin-right: 9%;*/
    text-align-last: center;
  }
</style>
