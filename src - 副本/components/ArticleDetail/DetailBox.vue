<template>
  <!--一级、二级评论的分批加载。添加没有更多的时候的提示信息-->
  <div id="all">
      <div class="article-content"><!--文章内容-->
        {{this.articleContent}}
        <div><!--点赞按钮和评论按钮-->
          <el-badge :value=this.likesCount class="item">
            <el-button id="like-button" size="small" @click=like($event)>点赞</el-button>
          </el-badge>
        </div>
        <!--分割线-->
        <el-divider>评论区</el-divider>
        <!--用户直接评论文章的评论框和按钮等-->
        <div class="write-comment">
          <el-input type="textarea" :rows=this.comment1_rows placeholder="请输入评论内容" v-model="comment_input_strate"></el-input><!--一级评论输入框-->
          <el-button name="comment1"  plain @click=submit_comment($event,1)>提交</el-button>
        </div>
        <el-divider></el-divider>
        <div id="comment-box"><!--评论区展示box-->
          <div v-for='(comment1,index) in commentList' :key="comment1.commentId" class="each-comment1"><!--每一条一级评论-->
          <!--一级评论的布局-->
              <el-row>
                <el-col :span="20">
                  <div class="grid-content bg-purple">
                    <div class="flex-start"><!--应该将评论者的头像和昵称放在同一行-->
                      <div class="comment1-avatar"><el-avatar style="width:2rem;height:2rem" :src=comment1.avatar></el-avatar></div><!--评论者的头像-->
                      <div class="comment1-name">{{comment1.userName}}:</div><!--评论者的昵称-->
                    </div>
                  </div>
                </el-col>
                <!--回复举报按钮-->
                <el-col :span="4">
                  <div class="grid-content bg-purple-light">
                    <el-link type="info" style="margin-right:1rem">举报</el-link>
                    <el-link type="primary" name="comment2" @click=reply_comment(comment1)>回复</el-link>
                  </div>
                </el-col>
              </el-row>
              <!--一级回复的回复内容-->
              <div class="comment1-content">{{comment1.context}}</div>
              <!--当点击回复时，向这里插入评论输入框-->
            <el-input v-if="comment1.commentId===show_recomment_id" :name=comment1.commentId type="textarea" :rows=comment2_rows placeholder="请输入评论内容" v-model="comment_input"></el-input>
            <el-button name="comment2" v-if="comment1.commentId===show_recomment_id" @click=submit_comment($event,comment1)>提交</el-button>
            <el-button v-if="comment1.commentId===show_recomment_id" @click=cancel_submit()>取消</el-button>
           <!--二级回复的布局-->
            <div v-for='(comment2,index) in comment1.replyVO' :key="comment2.commentId" class="each-comment2" ><!--每一条二级评论-->
              <el-row>
                <el-col :span="20">
                  <div class="grid-content bg-purple">
                    <div class="flex-start">
                      <div class="comment2-avatar"><el-avatar style="width:2rem;height:2rem" :src=comment2.avatar></el-avatar></div><!--评论者的头像-->
                      <div class="comment2-name">{{comment2.userName}}回复{{comment2.replyUserName}}:   {{comment2.createTime}}</div><!--评论者的昵称、被回复者的昵称、二级评论的内容、时间-->
                    </div>
                  </div>
                </el-col>
                <!--回复举报按钮-->
                <el-col :span="4">
                  <div class="grid-content bg-purple-light">
                    <el-link type="info" style="margin-right:1rem">举报</el-link>
                    <el-link type="primary" name="comment2" @click=reply_comment(comment2)>回复</el-link>
                  </div>
                </el-col>
              </el-row>
              <div class="comment2-content">{{comment2.context}}</div><!--二级回复的回复内容-->
              <!--当点击回复时，向这里插入评论输入框-->
              <el-input v-if="comment2.commentId===show_recomment_id" :name=comment2.commentId type="textarea" :rows=comment2_rows placeholder="请输入评论内容" v-model="comment_input"></el-input>
              <el-button name="comment2" v-if="comment2.commentId===show_recomment_id" @click=submit_comment($event,comment1)>提交</el-button>
              <el-button v-if="comment2.commentId===show_recomment_id" @click=cancel_submit()>取消</el-button>
            </div>
          </div>
        </div>
        <div><!--加载更多一级评论-->
          <el-link type="primary" @click=more_comment1()>加载更多</el-link>
        </div>
      </div>
      <!--点赞和评论-->
  </div>
</template>

<style scoped>
  .comment2-content{
    margin-left:2rem;
  }
  .comment1-content{
    margin-left:2rem;
  }
  .each-comment2{
      margin-left:5rem;
    }
    .flex-start{
      display:flex;
      justify-content:flex-start ;
      align-items:center;
    }
</style>
  
<script>
import {http_raw_token} from "../../requests/requests"
export default {
  name: "ArticleBox",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  data() {
    return {
      show_recomment_id:'',
      comment_input_strate:'',//用户直接评论文章时输入的评论
      comment_input:'',//用户回复别人的评论时输入的评论
      comment2_rows:2,
      comment1_rows:3,//加载页面的时候可以设置为小一点，当用户点击评论输入框时，评论框行数变多。点击其他地方时，行数变少
      reply_comment2_show:false,
      articleId:this.$route.params['keyword'],//文章id
      articleContent:'获取文章失败，请刷新重试',//文章内容
      articleAuthor:'',//文章作者
      articleTime:'',//文章发布时间
      articleTitle:'',//文章标题
      likesCount:'',//文章点赞数
      commentsCount:'',//文章评论数
      isLike:'',//作者是否已经点赞过
      commentList:[],
      headPhoto:'',
    };
  },
  methods: {
    //初始化信息，在create()中调用
    init(){
       this.$http.get("http://101.43.198.16:10000/article/getInfo?artId="+this.articleId,{headers:{'Authorization':this.$store.state.token}}).then((res)=>{
                    console.log(res.data)
                    if(res.data.code==200){
                      var article=res.data.date
                      this.articleContent=article.context
                      this.articleAuthor=article.authorId
                      this.articleTime=article.createTime
                      this.likesCount=article.likes
                      this.commentsCount=article.comments
                      this.isLike=article.like
                      this.commentList=article.commentList
                      this.headPhoto=article.picPath[0]
                      //初始化点赞按钮颜色
                      const like_button = document.getElementById('like-button')
                      if(this.isLike){
                          like_button.style.backgroundColor="rgb(206, 187, 187)"
                        }
                        else{
                          like_button.style.backgroundColor="white"
                        }
                    }
                    else if(res.data.code==401){
                      //登陆过期
                      alert('登录状态过期，请重新登陆')
                      this.$store.commit('$_removeLoginInfo');//移除旧的token等信息
                      this.$router.push('./login')
                    }
                  })
    },
    //点赞按钮触发,这里还没写完
    like(){
      //var articleId=event.currentTarget.name//获取点赞按钮的名称，也就是文章id
     
         this.$http.get("http://101.43.198.16:10000/article/giveLike",{headers:{'Authorization':this.$store.state.token}, 
         params: {
                articleId: this.articleId,
                isLike: !this.isLike,
            }}).then((res)=>{
              const like_button = document.getElementById('like-button')
               if(!this.isLike){
                 //如果原来是没点赞，点击后变为点赞状态
                  like_button.style.backgroundColor="rgb(206, 187, 187)"
                  this.isLike=!this.isLike
                  this.likesCount=this.likesCount+1
                  //向后端发送请求，更新信息
               }
                else{
                  like_button.style.backgroundColor="white"
                  this.isLike=!this.isLike
                  this.likesCount=this.likesCount-1
                }
                })
    },
 
    //提交一级评论,未完善,回复者的信息
    submit_comment(event,reply_info){
      var button_name=event.currentTarget.name
      var pidi=0
      var replyUserIdi = 0
      var context=""
      //如果评论为空
      if(button_name=="comment1"){
        context=this.comment_input_strate
      }
      else if(button_name=="comment2"){
        context=this.comment_input
      }
      if(!context){
        this.$alert('请输入评论');
      }
      else{
        if(button_name=="comment1"){//如果是直接评论
          console.log("直接评论")
        }
        else if(button_name=="comment2"){
          pidi=reply_info.commentId//回复的是当前的评论
          replyUserIdi=reply_info.userId//回复的人是当前的人
          
        }
        console.log(pidi+'   '+replyUserIdi+'   '+context)
        //向后台发送请求
        http_raw_token.post("http://101.43.198.16:10000/comment/insert",JSON.stringify({
                articleId: this.articleId,
                context: context,
                pid: pidi,
                replyUserId: replyUserIdi
                })
            
            ).then((res)=>{
              console.log("后台返回值")
              console.log(res)
              this.init()
          })
      }
      this.comment_input_strate=""
      this.comment_input=""
    },
    //取消评论，即隐藏评论框
    cancel_submit(){
      this.show_recomment_id="  "
    },

    //回复一级评论,传入被回复的评论的信息
    reply_comment(parent_info){
      this.show_recomment_id=parent_info.commentId//显示评论框
    },
    //加载更多评论
    more_comment1 () {
        console.log(this.commentList.length)
         this.$http.get("http://101.43.198.16:10000/comment/get",{headers:{'Authorization':this.$store.state.token}, 
         params: {
                artId: this.articleId,
                index: this.commentList.length,//从这个id开始，往后的5条评论
            }}).then((res)=>{
              console.log(res.data.date)
              this.commentList=this.commentList.concat(res.data.date)
              console.log(this.commentList.length)
            })
      }

  },
  created() {
    //获取文章详细信息
   this.init()
  },
};

</script>