<!--  -->
<template>
  <div>
    <job-list id="job-body"></job-list>
  </div>
</template>

<script>

import JobList from '../../components/Job/JobList.vue';

export default {
  name: "Hobby",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: { JobList },
};
</script>

<style scoped>
  #job-search{
    margin-top:3rem;
  }
</style>>
