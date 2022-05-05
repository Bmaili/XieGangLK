<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <!--这个div是获取邮箱验证码按钮-->
      <div>
        <el-button v-if="this.show" @click="get_valid_code('ruleForm')">获取验证码</el-button>
        <el-button v-if="!this.show" disabled>{{count}}s后再试</el-button>
      </div>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <el-input v-model="ruleForm.verificationCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <!--非history模式下，路由切换要加“#/”-->
      <el-link type="primary" href='#/login'>已有账号,去登陆</el-link>
    </el-form>
  </div>
</template>
<script>
import {http_raw} from "../../requests/requests"
let TIME_COUNT = 60; // 设置一个全局的倒计时的时间
  export default {
    data() {
      var validateEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
        else{
          callback()
        }
      };
      var validateVerificationCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入验证码'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      
      return {
        show: true,
        count: '',
        timer: null,
        ruleForm: {
          email:'',
          pass: '',
          checkPass: '',
          verificationCode: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          verificationCode:[
            { validator: validateVerificationCode, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        getCode () {
        // 验证码倒计时
        if (!this.timer) {
          this.count = TIME_COUNT
          localStorage.regtime = this.count;
          this.show = false
          this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--
          localStorage.regtime = this.count;
          } else {
          this.show = true
          clearInterval(this.timer)
          this.timer = null
          }
        }, 1000)
        }
      },
      get_valid_code(formName){//获取邮箱验证码
        this.getCode()
        if(this.ruleForm.email){
            this.$http.get("http://101.43.198.16:10000/user/getRegistCode?email="+this.ruleForm.email).then((res)=>{
                  console.log(res)
                  if (res.data.code==200){//成功获取验证码
                    alert(res.data.msg)
                  }
                  else if(res.data.code==401){
                    alert(res.data.msg)
                  }
                  else{
                    alert('未知错误')
                  }
                });
          }
          else{
            alert('邮箱不能为空');
          }
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //向后端发送注册请求
            http_raw.post("http://101.43.198.16:10000/user/regist",JSON.stringify({
                code: this.ruleForm.verificationCode,
                email: this.ruleForm.email,
                password: this.ruleForm.pass
                })
            
            ).then((res)=>{
              console.log(res)
              if(res.data.code==200){
                alert('注册成功，请前往登录')
                this.$router.push('./login')
              }
              else if(res.data.code==401){
                alert(res.data.msg);
                }
              else{
                  alert('未知错误');
                }
            })
          } 
         
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
      // 进入页面时获取倒计时中止的位置，并继续计时
      if (localStorage.regtime > 0 && localStorage.regtime <= TIME_COUNT){
        TIME_COUNT = localStorage.regtime;
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--
          localStorage.regtime = this.count;
        } else {
          this.show = true;
          clearInterval(this.timer);
          this.timer = null
        }
        }, 1000)
      }
    },
  }
</script>