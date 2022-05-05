<!--  -->
<template>
  <div  id="all">
    <register-box id="register-box"></register-box>
  </div>
</template>

<script>

import RegisterBox from '../../components/Register/RegisterBox.vue';

export default {
  name: "Register",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {RegisterBox },
};

</script>

<style scoped>
#register-box{
        width:20rem;
        height:25rem;
        position:absolute;
        top:20%;
        right:10%;
        border:1px solid;
        background-color:white;
    }
    #all{
        background-color:rgb(140, 186, 207);
        position: absolute;
        height:100%;
        width:100%;
    }
</style>>
