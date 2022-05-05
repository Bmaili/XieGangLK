<!--  -->
<template>
  <div id="all">
    <el-container>
      <el-header id="top"><main-top></main-top></el-header>
          
          <router-view></router-view>
          
      <el-footer id="foot"><main-buttom></main-buttom></el-footer>
    </el-container>
  </div>
</template>

<script>
import MainTop from '../components/MainTop.vue';
import MainBody from '../components/Home/MainBody.vue';
import MainHotJob from '../components/Home/MainHotJob.vue';
import MainHotCourse from '../components/Home/MainHotCourse.vue';
import MainButtom from '../components/MainButtom.vue';
import Home from './Main/Home.vue';
export default {
  name: "Home",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: { MainTop, MainBody,MainHotJob,MainHotCourse,MainButtom,Home },
};
</script>

<style scoped>
  #top{
    width: 100%;
    padding:0px 0px 0px 0px;
    margin:0px 0px 0px 0px;
    height: 100%;
  }
  #main{
    background-color:rgb(247, 242, 242);
    width: 100%;
    padding:0px 0px 0px 0px;
    margin:0px 0px 0px 0px;
  }
  #foot{
    background-color:white(255, 255, 255);
    width: 100%;
    margin:5rem 0rem 0rem 0rem;
    padding:0rem 0rem 15rem 0rem;
  }
  #all{
    height: 100%;
    width: 100%;
    margin:0px 0px 0px 0px;
    padding:0px 0px 0px 0px;
  }

</style>>
