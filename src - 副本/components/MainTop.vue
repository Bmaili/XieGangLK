<template>
  <div>
    <!--导航栏-->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect" id="all-top">

  <el-row class="top-box">
    <el-col :span="4" class="title-left">/斜杠人生</el-col>
    <el-col :span="16" class="title-center">
      <div class="title-box" @tab-click="handleSelect">
      <el-menu-item class="title" index="home" id="home" style="margin-left:20%">首页</el-menu-item>
      <el-menu-item class="title" index="jobcenter" id="ptj-center">兼职中心</el-menu-item>
      <el-menu-item class="title" index="coursecenter" id="cls-center">课程中心</el-menu-item>
      <el-menu-item class="title" index="hobbycenter" id="hob-center">兴趣圈</el-menu-item>
      </div>
    </el-col>
    <el-col :span="4" class="title-right">
      <div class="title-box">
        <el-submenu v-if="this.isLogin" class="title" index="persenalcenter" id="per-center">
          <template slot="title"><i class="el-icon-user"></i>个人中心</template> <!--slot="title"指明在哪个插槽插入内容-->
          <el-menu-item index="usercenter">个人资料</el-menu-item>
          <el-menu-item index="myclass">我的课程</el-menu-item>
          <el-menu-item index="outlogin">退出登录</el-menu-item>
        </el-submenu>
        <el-submenu v-else class="title" index="persenalcenter" id="per-center">
          <template slot="title"><i class="el-icon-user"></i>登录/注册</template> <!--slot="title"指明在哪个插槽插入内容-->
          <el-menu-item index="login">登录</el-menu-item>
          <el-menu-item index="register">注册</el-menu-item>
        </el-submenu>
    </div>
    </el-col>
  </el-row>
  </el-menu>
  
  </div>
</template>

<script>
import store from '../store/store.js'
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isLogin:store.state.isLogin
    };
  },
  methods: {
    handleSelect(key) { 
      let title_list=["home","jobcenter","classcenter","hobbycenter","persenalcenter"]
      if (key=="jobcenter"){
        this.$router.push('/'+key+'/default')
      }
      else if(key=="coursecenter"){
        this.$router.push('/'+key+'/default')
      }
      else if(key=="hobbycenter"){
        this.$router.push('/'+key+'/default')
      }
      else if(key=="persenalcenter"){
        this.$router.push('/'+key+'/default')
      }
      else if(key=="usercenter"){
        this.$router.push('/'+key+'/default')
      }
      else if(key=="login"){
        this.$router.push('/'+key)
      }
      else if(key=="outlogin"){
        this.$store.commit('$_removeLoginInfo');
        this.$router.push('/login')
      }
      else if(key=="register"){
        this.$router.push('/register')
        this.$store.commit('$_removeLoginInfo');
      }
      else{
        this.$router.push('/'+key)
      }
      
      
      
    },
  },
  created() {
   
  },
};
</script>


<style scoped>

#all-top {
  background-color: rgb(135, 209, 243);
  width: 100%;
}
.title{
  display: inline-block;
}
.top-box{
  display: flex;
  align-items: center;
}
.title-left{
  margin-left:2rem;
  font-size: 1.5rem;
}
</style>