<!--  -->
<template>
  <div id="all">
    <article-list></article-list>
  </div>
</template>

<script>
import ArticleList from '../../components/Hobby/ArticleList.vue';

export default {
  name: "HobCenter",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {ArticleList },
};

</script>

<style scoped>
</style>>
