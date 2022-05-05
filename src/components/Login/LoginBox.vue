<template>
  <el-container>
    <el-header align="center" style="margin-top: 3%; height: 0"
      >/斜杠人生</el-header
    >
    <el-main>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="margin-left: 25%"
            type="primary"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
        <div style="margin-left: 50%">
          <el-link type="primary" href="#/register">注册账号</el-link>
        </div>
      </el-form>
    </el-main>
  </el-container>
</template>

<style scoped>
.demo-ruleForm {
  position: absolute;
  padding-top: 10%;
  padding-right: 10%;
}
</style>

<script>
import { http_raw } from "../../requests/requests";

export default {
  name: "LoginBox",
  data() {
    //输入验证，账号密码不能为空
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      /*instance : axios.create({
          baseURL: '',
          timeout: 1000,
          headers: {'Content-Type': 'application/json'}
        }),*/
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交成功执行的函数,将账号密码发送到后端，并根据返回结果记录token，并进行页面跳转（跳转到首页）
          http_raw
            .post(
              "http://101.43.198.16:10000/user/login",
              JSON.stringify({
                code: "string",
                email: this.ruleForm.username,
                password: this.ruleForm.password,
              })
            )
            .then((res) => {
              if (res.data.code == 200) {
                this.$store.commit("$_setToken", res.data.date.Authorization);
                //登录成功，则向后台发请求，获取用户信息：头像、昵称等
                this.$http
                  .get("http://101.43.198.16:10000/user/getInfo", {
                    headers: { Authorization: this.$store.state.token },
                  })
                  .then((res) => {
                    if (res.data.code == 200) {
                      
                      //获取个人信息成功，才能进入
                      this.$store.commit("$_setLoginInfo", [
                        res.data.date.userId,
                        res.data.date.userName,
                      ]); //commit只支持传递两个参数，所以第二个参数设为数组
                      this.$router.push("./home");
                    } else {
                      this.$store.commit("$_removeLoginInfo");
                      this.$router.push("./login");
                    }
                  });
              } else if (res.data.code == 401) {
                alert(res.data.msg);
              } else {
                alert("未知错误");
              }
            });
        } else {
          console.log("登录失败");
          return false;
        }
      });
    },
  },
};
</script>