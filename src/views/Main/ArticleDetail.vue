<!--  -->
<template>
  <div id="all">
    <el-row :gutter="20">
      <!--查看elementui的layout布局-->
      <el-col :span="14" :offset="5"><div class="grid-content bg-purple"><detail-box></detail-box></div></el-col>
    </el-row>
    
  </div>
</template>

<script>
import DetailBox from '../../components/ArticleDetail/DetailBox.vue';

export default {
  name: "ArticleDetail",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {DetailBox },
};

</script>

<style scoped>
 
    
</style>>
