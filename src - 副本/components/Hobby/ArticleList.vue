<template>
  <div id="all">
    <!--搜索框-->
    <div class="flex-center"> 
      <div style="margin-top: 15px;width:40%;margin-right:16rem">
        <el-input placeholder="请输入内容" v-model="search_input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <el-button type="primary" @click=publickArticle()>去发文章</el-button>
    <div class="flex-center" style="width:100%;margin-top:2rem">
      <div  style="width:70%;height:100%">
        <el-row>
          <!--中间文章主体-->
          <el-col :span="18" class="background-color" >
            <div class="grid-content bg-purple " v-for="article in article_list.slice(0,load_num)">
              <!--头像、名称、职位-->
              <div class="flex-start">
                <!--头像-->
                <div style="width:3rem;height:3rem">
                  <el-avatar style="width:100%;height:100%" :src=article.picPath[0]></el-avatar>
                </div>
                <!--作者名称、职位-->
                <div>
                  <h3 class="no-margin">{{article.id}}</h3>
                  <p class="no-margin" style="font-size:0.8rem">{{article.authorId}}</p>
                </div>
              </div>
              <!--文章简介、链接-->
              <div>
                <p>{{article.digest}}</p>
                <p style="font-size:0.6rem">发布时间:未知</p>
                <!--文章链接和点赞数等-->
                <el-row>
                  <el-col :span="18">
                    <div class="grid-content bg-purple">
                      <el-link  type="primary" target="_blank" :href="'#/articledetail/'+article.id">点击查看文章</el-link>
                    </div>
                    </el-col>
                  <!--点赞和评论数-->
                  <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                      <el-badge :value=article.likes class="item">
                        <el-button :name=article.id size="small" @click=like()>点赞</el-button>
                      </el-badge>
                      <el-badge :value=article.reading class="item" style="margin-left:2rem">
                        <el-button :name=article.id size="small" @click=comment()>评论</el-button>
                      </el-badge>
                    </div>
                  </el-col>
                </el-row>
                
              </div>
              <!--分割线-->
              <el-divider></el-divider>
            </div>
          </el-col>
          <!--右侧的热门话题等部件-->
          <el-col :span="6">
            <!--热门话题-->
            <div class="grid-content bg-purple-light background-color" style="margin-left:1.5rem" >
              <div class="flex-space-between">
                <h3>热门话题</h3>
                <el-button class="flex-center" type="primary" icon="el-icon-refresh" style="height:1rem;width:5rem;font-size:0.4rem">换一批</el-button>
              </div>
              <!--热门话题的内容-->
              <div v-for="(article,index) in hot_articles">
                  <el-link style="margin-top:0.4rem" type="danger">{{index+1}}、{{article.title}}</el-link>
              </div>
            </div>
            <!--等你来答-->
            <div class="grid-content bg-purple-light background-color" style="margin:1.5rem 0rem 0rem 1.5rem" >
              <div class="flex-space-between">
                <h3>等你来答</h3>
                <el-link class="flex-center" type="primary" style="height:1rem;width:5rem;font-size:0.4rem">更多问题</el-link>
              </div>
              <!--热门话题的内容-->
              <div v-for="(article,index) in hot_questions">
                  <el-link style="margin-top:0.4rem" type="danger">{{index+1}}、{{article.title}} ></el-link>
              </div>
            </div>
          </el-col>
        </el-row>
        <div style="margin:1rem 0rem 2rem 23rem"><el-link type="primary" @click="load()">加载更多</el-link></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .background-color{
    background-color:rgb(240, 229, 229);
    padding:1rem 1rem 1rem 1rem;
  }
  .flex-space-between{
          display:flex;
          justify-content:space-between;
          align-items:center;
      }
  .flex-start{
      display:flex;
      justify-content:start;
      align-items:center;
  }
  .flex-center{
        display:flex;
        justify-content:center;
        align-items:center;
    }
  .no-margin{
    margin:0px 0px 0px 0px;
  }
  .border{
        border:solid 0.3px;
    }
</style>
  
<script>

export default {
  name: "ArticleList",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  data() {
    return {
      article_list:[],
      article_number:5,
      hot_articles:[
        {
          "id": "21651",
          "title": "如何快速斩获兼职岗位"
        },
        {
          "id": "21652",
          "title": "小白入门哪一门编程语言比较好"
        },
        {
          "id": "21653",
          "title": "如何与雇主愉快地相处"
        },
        {
          "id": "21654",
          "title": "如何快速准确地找到有用的课程"
        }
      ],
      hot_questions:[
        {
          "id": "21630",
          "title": "python如何做出一款小游戏"
        },
        {
          "id": "21631",
          "title": "python如何提高代码运行效率"
        },
        {
          "id": "21632",
          "title": "java和python的区别"
        },
        {
          "id": "21633",
          "title": "使用go语言目的公司多吗"
        }
      ],
      load_num:6,
      search_input:"",
    };
  },
  methods: {
    //转向发文章界面
    publickArticle(){
      let routeData = this.$router.resolve({ path: '/publicarticle' });
      window.open(routeData.href, '_blank');

    },
    //点赞按钮触发
    like(){
      //var articleId=event.currentTarget.name//获取点赞按钮的名称，也就是文章id
      alert('请进入文章详情页面进行点赞')
    },
    //评论按钮触发
    comment(){
      alert('请进入文章详情页面进行评论')
    },
    load () {
        this.load_num +=5
      }

  },
  created() {
    //测试文章接口
    this.$http.get("http://101.43.198.16:10000/article/artList"+"?startId="+"1004",{headers:{'Authorization':this.$store.state.token}}).then((res)=>{
                  console.log(res.data)
                  if(res.data.code==200){
                    this.article_list=res.data.date
                   
                  }
                  else if(res.data.code==401){
                    //登陆过期
                    alert('登录状态过期，请重新登陆')
                    this.$store.commit('$_removeLoginInfo');
                    this.$router.push('./login')
                  }
                })
    this.$http.get("http://rap2api.taobao.org/app/mock/297234/hot_article").then((res)=>{
           // this.hot_articles=res.data.list
        })
    this.$http.get("http://rap2api.taobao.org/app/mock/297234/hob_question").then((res)=>{
            //this.hot_questions=res.data.list
        })
  },
};

</script>