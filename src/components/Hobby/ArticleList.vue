<template>
  <div id="all">
    <!--搜索框-->
    <div class="flex-center"> 
      <div style="margin-top: 15px;">
         <el-select  v-model="choose_typeid" placeholder="请选择文章分类">
            <el-option
              v-for="item in article_types"
              :key="item.typeId"
              :label="item.typeName"
              :value="item.typeId"
              >
            </el-option>
          </el-select>
      </div>
      <el-button @click="serrchForType()" style="margin-top: 15px;" slot="append" icon="el-icon-search"></el-button>
    </div>
    <el-button id="public-article" type="primary" @click=publickArticle()>去发文章</el-button>
    <div class="flex-center" style="width:100%;margin-top:2rem">
      <div  style="width:70%;height:100%">
        <el-row>
          <!--中间文章主体-->
          <el-col :span="18" class="background-color" >
            <div class="grid-content bg-purple " v-for="article in article_list">
              <!--头像、名称、职位-->
              <div class="flex-start">
                <!--头像-->
                <div style="width:3rem;height:3rem">
                  <el-avatar style="width:100%;height:100%" :src=article.avatar></el-avatar>
                </div>
                <!--作者名称、职位-->
                <div>
                  <p class="no-margin" style="font-size:0.8rem">{{article.userName}}</p>
                </div>
              </div>
              <!--文章简介、链接-->
              <div>
                <p>{{article.digest}}</p>
                <div class="flex-start">
                  <p style="font-size:0.6rem;">发布时间:未知</p>
                  <p style="font-size:0.6rem;margin-left:3rem">文章类别:{{article.typeName}}</p>
                </div>
                
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
                <el-button class="flex-center" type="primary" icon="el-icon-refresh" style="height:1rem;width:5rem;font-size:0.8rem">换一批</el-button>
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
                <el-link class="flex-center" type="primary" style="height:1rem;width:5rem;font-size:0.8rem">更多问题</el-link>
              </div>
              <!--热门话题的内容-->
              <div v-for="(article,index) in hot_questions">
                  <el-link style="margin-top:0.4rem" type="danger">{{index+1}}、{{article.title}} ></el-link>
              </div>
            </div>
          </el-col>
        </el-row>
        <div style="margin:1rem 0rem 2rem 23rem"><el-link type="primary" @click="load()">{{loadmessage}}</el-link></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /*文章按钮样式 */
  #public-article{
    margin-left:57rem;
    margin-top:2rem;
    background-color:rgb(44, 125, 211);
  }
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
      newest_id:"",//最新的文章的id
      choose_typeid:0,
      article_types:[],//类别列表
      loadmessage:"加载更多",
      article_list:[],
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
    getTypeList(){//获取分类列表
      this.$http.get("http://101.43.198.16:10000/article/getType", {
                    headers: { Authorization: this.$store.state.token },
                  })
                  .then((res) =>{
                    this.article_types=res.data.date
                  })
    },
    //转向发文章界面
    publickArticle(){
      let routeData = this.$router.resolve({ path: '/publicarticle' });
      window.open(routeData.href, '_blank');

    },
    //点赞按钮触发
    like(){
      //var articleId=event.currentTarget.name//获取点赞按钮的名称，也就是文章id
      this.$alert('请进入文章详情页面进行点赞（可点击左侧"点击查看文章"进入文章详情页面）')
    },
    //评论按钮触发
    comment(){
      this.alert('请进入文章详情页面进行评论（可点击左侧"点击查看文章"进入文章详情页面）')
    },
    load () {
        this.$http.get("http://101.43.198.16:10000/article/artList",{headers:{'Authorization':this.$store.state.token}, 
        params: {
              startId:this.article_list[this.article_list.length-1].id-1,//从这个id开始，往后的5条评论authorId
              typeId:this.choose_typeid
          }}).then((res)=>{
            if(res.data.date.length>0){
              this.article_list=this.article_list.concat(res.data.date)
              
            }
            else{
              this.loadmessage="已经加载完了"
            }
          })
      },
    serrchForType(){//根据文章类别筛选文章
      this.$http.get("http://101.43.198.16:10000/article/artList",{headers:{'Authorization':this.$store.state.token}, 
        params: {
              typeId:this.choose_typeid
          }}).then((res)=>{
            if(res.data.date.length==0){
              this.$alert("暂时没有该类别的文章哦~建议您选择其他类别")
            }
            else{
              this.article_list=res.data.date
              this.loadmessage="加载更多"
            }
          })
    }
  },
  created() {
    this.getTypeList()
    //测试文章接口
    this.$http.get("http://101.43.198.16:10000/article/artList",{headers:{'Authorization':this.$store.state.token}}).then((res)=>{
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