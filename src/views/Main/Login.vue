<!--  -->
<template>
  <div id="all">
    <login-box id="login-box"></login-box>
  </div>
</template>

<script>
import LoginBox from "../../components/Login/LoginBox.vue";

export default {
  name: "Login",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: { LoginBox },
};
</script>

<style scoped>
#login-box {
  width: 30%;
  height: 50%;
  position: absolute;
  top: 20%;
  right: 10%;
  border: 1px solid;
  background-color: rgb(140, 186, 207);
}
#all {
  background: url(../../assets/photo/login_register/bge.png) no-repeat;
  position: fixed;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}
</style>>
