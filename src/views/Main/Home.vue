<!--  -->
<template>
  <div id="all">
    <el-main id="main">
      <main-body></main-body>
      <main-hot-job></main-hot-job>
      <main-hot-course></main-hot-course>
    </el-main>
  </div>
</template>

<script>

import MainBody from '../../components/Home/MainBody.vue';
import MainHotJob from '../../components/Home/MainHotJob.vue';
import MainHotCourse from '../../components/Home/MainHotCourse.vue';


export default {
  name: "Home",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {MainBody,MainHotJob,MainHotCourse },
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
    margin:0px;
  }
  #all{
    height: 100%;
    width: 100%;
    margin:0px 0px 0px 0px;
    padding:0px 0px 0px 0px;
  }

</style>>
