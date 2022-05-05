import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Main/Home'
import Main from '@/views/Main'
import HobCenter from '@/views/Main/HobCenter'
import PublicArticle from '@/views/Main/PublicArticle'
import ArticleDetail from '@/views/Main/ArticleDetail'
import CourseCenter from '@/views/Main/CourseCenter'
import UserCenter from '@/views/Main/UserCenter'
import MyInfo from '@/components/User/MyInfo'
import ResumeCenter from '@/components/User/ResumeCenter'
import UpdateVedio from '@/components/User/UpdateVedio'
import MyHobbyCenter from '@/components/User/MyHobbyCenter'
import JobCenter from '@/views/Main/JobCenter'
import JobDetail from '@/views/Main/JobDetail'
import Login from '@/views/Main/Login'
import Register from '@/views/Main/Register'
Vue.use(Router)


/*解决路由重复引起的报错 */
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router=new Router({
  //mode:'history',
  //,meta: {requiresAuth: true}控制该路由是否需要登陆后才能访问
  routes: [
    {path: '/',name: '/',component: Main,redirect: '/home',children: [
      {path: '/home',name: '/home',component: Home,meta: {requiresAuth: false}},
      {path: '/hobbycenter/:keyword',name: 'HobCenter',component: HobCenter,meta: {requiresAuth: true}},
      {path: '/articledetail/:keyword',name: 'ArticleDetail',component: ArticleDetail,meta: {requiresAuth: true}},
      {path: '/publicarticle',name: 'PublicArticle',component: PublicArticle,meta: {requiresAuth: true}},
      {path: '/coursecenter/:keyword',name: 'CourseCenter',component: CourseCenter,meta: {requiresAuth: true}},//路由中使用:传递参数，刷新页面数据不会丢失
      {path: '/jobcenter/:keyword',name: 'JobCenter',component: JobCenter,meta: {requiresAuth: true}},
      {path: '/jobdetail/:jobid',name: 'JobDetail',component: JobDetail,meta: {requiresAuth: true}},
      {path: '/usercenter/:userid',name: 'UserCenter',component: UserCenter,redirect:"/usercenter/myinfo",meta: {requiresAuth: true},
      children: [
        {path: '/usercenter/myinfo',name: 'myinfo',component: MyInfo},
        {path: '/usercenter/resumecenter',name: 'resumerenter',component: ResumeCenter},
        {path: '/usercenter/updatevedio',name: 'updatevedio',component: UpdateVedio},
        {path: '/usercenter/myhobbycenter',name: 'myhobbycenter',component: MyHobbyCenter},
      ]},
    ]},
    {path:'/login',name:'login',component: Login},
    {path:'/register',name:'register',component: Register},
    
  ]
})


export default router