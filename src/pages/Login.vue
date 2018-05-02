<template>
  <div class="login-wrap">
    <!--头部-->
    <div>
      <el-row :gutter="24">
        <!--标题-->
        <el-col :xs="18" :sm="20" :md="21" :lg="21" :xl="22">
          <div class="login-top-ms">{{$t('baseInfo.cms-title')}}</div>
        </el-col>
        <!--语言栏-->
        <el-col :xs="6" :sm="4" :md="3" :lg="3" :xl="2">
        <el-select v-model="language" placeholder="请选择语言" size="medium" @change="changeLang(language)">
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
      language: localStorage.lang || '选择语言',
      ruleForm: {
        account: '',
        password: '',
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

  .login-top {
    /*position: absolute;*/
    /*top: 50%;*/
    /*width: 100%;*/
    /*margin-top: -230px;*/
    /*text-align: center;*/
    /*font-size: 30px;*/
    /*color: #fff;*/
  }
  .row-hight {
    /*margin-top: 20px;*/
    /*margin-left: 5%;*/
  }

  .row-hight-message {
    /*margin-top: 1px;*/
  }

  .login-top-ms {
    font-size: xx-large;
    text-align: center;
    color: white;
    /*margin-left: 9%;*/
    align-content: center;
    font-family: "Lao UI";
  }

  .login-form {
    position: absolute;
    left: 35%;
    top: 25%;
    width: 20%;
    height: 25%;
    /*margin: 0px 0 0 -190px;*/
    padding: 40px;
    border-radius: 5px;
    background: #fff;

    /*padding-left: 30%;*/
    /*margin-top: -15%;*/
    /*width: 58%;*/
    /*height: 42%;*/
  }

  .login-p {
    /*font-size: xx-small;*/
    /*font-family: Consolas;*/
  }

  .login-img {
    /*width: 150px;*/
    /*height: 150px;*/
    /*margin-left: 18%;*/
  }

  .el-define-form{
    /*margin: 12% 1%;*/
    /*margin-left: -16%;*/
    /*margin-right: 9%;*/
    text-align-last: center;
  }
</style>
