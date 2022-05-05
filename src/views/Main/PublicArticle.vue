<!--  -->
<template>
  <div  id="all">
    <public-box id="pulic-box"></public-box>
  </div>
</template>

<script>

import PublicBox from '../../components/PublicArticle/PublicBox.vue';


export default {
  name: "PulicArticle",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {PublicBox },
  data() {
    return {
      textarea: ''
    }
  }
};

</script>

<style scoped>

</style>>
