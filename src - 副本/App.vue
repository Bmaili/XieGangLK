<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  //第一次访问网页时，如果本地缓存有token，则先判断token是否过期
  created(){
    


    if(window.localStorage.getItem('token')){//如果有缓存token，发送获取用户个人信息的接口
      this.$http.get("http://101.43.198.16:10000/user/getInfo",{headers:{'Authorization':this.$store.state.token}}).then((res)=>{
                  if (res.data.code==200){//获取个人信息成功，才能进入
                    this.$store.commit('$_setLoginInfo', [res.data.date.userId,res.data.date.userName]);//commit只支持传递两个参数，所以第二个参数设为数组
                  }
                  else{
                    alert('登录状态过期，请重新登陆')
                    this.$store.commit('$_removeLoginInfo');
                    this.$router.push('./login')
                  }
                })
    }
  },
}
</script>

<style>

</style>
