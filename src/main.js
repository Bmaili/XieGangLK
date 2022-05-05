// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index.js'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store.js'

Vue.use(ElementUI);
Vue.use(Vuex)

Vue.prototype.$http = axios;//修改内部的$http为axios，设置别名的意思，即设置 Vue.prototype.$http 为 axios 的别名
Vue.config.productionTip = false

//实例化请求axios


//配置关于登录的导航守卫
router.beforeEach((to, from, next) => {
  const token=store.state.token//获取token
  console.log(store.state.token)
  //使用to.matched.some的原因见：https://blog.csdn.net/liubangbo/article/details/109326082
  if (to.matched.some(m => m.meta.requiresAuth)) {    // 需要登录
    if (token) {//如果登录了，访问其他页面，则正常访问
      next()
    }
    else {//如果没登录，则定向到登录界面
      alert('未登录，请先登录账号')
      next({path:'/login'})
    }
  } 
  else {   // 如果访问不需要登录的页面
    if (token && to.path=='/login'){//如果登录了，又访问登录界面，则定向到首页
      next({path:'/home'})
    }
    else{//其他不需要登录的页面，直接访问
      next()
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',//相当于render: h => h(App)
  
})
// 全局路由构造函数，判断是否登录和要跳转到页面




