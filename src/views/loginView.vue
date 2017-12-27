<template>
  <div class="parent scroll_style">
    <div class="change"></div>
    <div class="stable">
      <el-form :model="ruleForm" :rules="rules" :status-icon="true" ref="ruleForm" class="login-container">
        <h1 class="title" >用户登录</h1>
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"  auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked"  @change="rememberMe('123')"  style="margin-bottom: 30px;margin-left: 270px">记住我</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;height:40px;color: #ffffff" :loading="logining" @click="loginSys()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  //  import { login, registerApi } from '../dataService/api';
  //  import { appUtil } from '../config';
  //  import { Utils } from '../common/js/utils.js'
  import  '../lib/jquery-1.8.3.min'
  export default {
    name: 'Login',
    data () {
      return {
        logining: false,
        ruleForm: {
          account: '',
          checkPass: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      }
    },
    mounted(){
      this.autoLogin()
    },
    methods: {
      rememberMe:function(str){
        if ($(".el-checkbox input[type='checkbox']").is(':checked') == true) {
          console.log(str);
          console.log(this.ruleForm.account);
          console.log(this.ruleForm.checkPass);
          localStorage.setItem('user',this.ruleForm.account);
          localStorage.setItem('pwd',this.ruleForm.checkPass);
        } else {
          localStorage.clear();
        }
      },
      autoLogin:function(){
        let user = localStorage.getItem('user');
        let password = localStorage.getItem('pwd');
        this.ruleForm.account = user ;
        this.ruleForm.checkPass = password ;
      },
      loginSys:function () {
        if ($(".el-checkbox input[type='checkbox']").is(':checked') == true) {
          localStorage.setItem('user',this.ruleForm.account);
          localStorage.setItem('pwd',this.ruleForm.checkPass);
        }
        this.$router.push('/menu');
        console.log('login');
      }
    }
//      initRuleForm () {
//        this.$refs.ruleForm.resetFields();
//      },
//      submitRegister () {
//        var that = this;
//        this.$refs.registerForm.validate(function (valid) {
//          if (valid) {
//            var param = {
//              userName: Utils.trim(that.registerForm.userName),
//              fullName: Utils.trim(that.registerForm.fullName),
//              password: Utils.trim(that.registerForm.password),
//              cellPhone: Utils.trim(that.registerForm.cellPhone),
//              email: Utils.trim(that.registerForm.email),
//              company: Utils.trim(that.registerForm.company)
//            };
//            that.register(param);
//          }
//        });
//      },
//      handleSubmit() {
//        var that = this;
//        this.$refs.ruleForm.validate(function (valid) {
//          if (valid) {
//            var loginParams = { userName: that.ruleForm.account, password: that.ruleForm.checkPass };
//            that.logining = true;
//            login(loginParams).then(function (data) {
//              that.logining = false;
//              let { errorCode, message,  result } = data;
//              if (errorCode == 0) {
//                if (result.status==0) {
//                  that.$message({ message: '此账号还未审核通过，请先联系管理员进行审核！', type: 'error' });
//                } else {
//                  appUtil.setCurrentUser(result);
//                  that.$router.push('/mainFrame');
//                }
//              } else {
//                that.$message({
//                  message: message,
//                  type: 'error'
//                });
//              }
//            })
//          }
//        });
//      },
//      toRegister() {
//        this.$router.push('/menu');
//      },
//      toResetPassword() {
//        this.$router.push('/monitor');
//      }
    //}
  }
</script>
<style scoped lang="scss">
  .parent{
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url(../img/loginPic.jpg);
    background-size: 100% 100%;
    background-position: center;
  .stable{
    width:450px;
  }

  }
</style>
