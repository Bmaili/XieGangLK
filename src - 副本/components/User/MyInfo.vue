<template>
    <div id="all">
        <!--头像层-->
        <div class="width-ty border">
            <el-row >
            <el-col :span="6" style="height:100%;border-right:solid 0.5px;">
                <!--左侧box-->
                <div class="grid-content bg-purple">
                    <el-row>
                        <!--头像box-->
                        <el-col :span="8">
                            <div class="grid-content bg-purple" style="height:100%;"><!--设置头像高度-->
                                <img class="photo" src="../../assets/photo/usercenter/head.jpg">
                            </div>
                        </el-col>
                        <!--用户昵称和认证按钮-->
                        <el-col :span="16">
                            <div class="grid-content bg-purple" style="margin-left:2rem;" id="username">
                                <p>用户昵称</p>
                                <el-link type="warning" style="margin-left:0.5rem">去认证</el-link>
                            </div>
                        </el-col>
                    </el-row>
                    <!--头像下面的内容-->
                    <div id="near-under-head">
                        <el-divider></el-divider><!--分割线-->
                        <div class="float-2"><p class="text-center" >2</p></div>
                        <div class="float-2"><p class="text-center" >2</p></div>
                    </div>
                    <div id="near-under-head">
                        <div class="float-2"> <el-link style="margin-left:1.8rem"  href="" target="_blank">我的申请</el-link></div>
                        <div class="float-2"> <el-link style="margin-left:1.4rem"  href="" target="_blank">我的兴趣圈</el-link></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="16" style="height:100%;border-left:0px;">
                <div class="grid-content bg-purple-light flex" style="height:8.8rem;">
                    <p class="border;" style="margin-left:1rem">简历在线编写</p>
                    <div> <el-button type="primary" icon="el-icon-edit" circle class="border" style="margin-left:0.3rem"></el-button></div>
                    <el-button class="border" type="primary" style="height:3rem;width:7.2rem;margin-left:5rem">上传课程视频</el-button>
                    <el-button class="border" type="primary" style="height:3rem;width:7.2rem;margin-left:5rem">上传简历文件</el-button>
                </div>
                <!--个人标签-->
                <div class="grid-content bg-purple-light flex" style="height:3rem;">
                    <p style="margin-right:2rem;margin-left:2rem">选择你的兴趣标签 :</p>
                    <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                        >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                </div>
             </el-col>
        </el-row>
        </div>
        <!--职位推荐-->
        <div class="width-ty border" style="border-top:solid 0px;">
            <div class="flex-cen-near">
                <p class="text-center title-text">兼职推荐</p>
                <el-button type="primary" class="flex-cen-near" style="margin-left:0.3rem;height:2rem;width:5rem"><p>刷新</p></el-button>
            </div>
            <el-row id="recommend-jobs" type="flex" class="row-bg hot-line" justify="center" v-for="recommend_job in recommend_jobs.slice(0,display_num)" :key=recommend_job.jobid>
            <el-col :span="3"><div style="text-align:center;display: flex; align-items:center;margin-top:0.2rem" class="grid-content bg-purple hot-line"><el-link  :href="'home/'+recommend_job.jobid" type="primary">{{recommend_job.jobname}}</el-link></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light hot-line"><p class="text-center">{{recommend_job.contents.company}}</p></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{recommend_job.contents.require.edu_background}}</p></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{recommend_job.contents.require.work_experence}}</p></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{recommend_job.contents.reward}}</p></div></el-col>
        </el-row>
        </div>
        <!--课程-->
        <div class="width-ty border" style="border-top:solid 0px;">
            <div class="flex-cen-near">
                <p class="text-center title-text">课程推荐</p>
                <el-button type="primary" class="flex-cen-near" style="margin-left:0.3rem;height:2rem;width:5rem"><p>刷新</p></el-button>
            </div>
            <el-row id="recommend-jobs" type="flex" class="row-bg hot-line" justify="center" v-for="recommend_course in recommend_courses.slice(0,display_num)" :key=recommend_course.courseid>
            <el-col :span="3"><div style="text-align:center;display: flex; align-items:center;margin-top:0.2rem" class="grid-content bg-purple hot-line"><el-link  :href="'home/'+recommend_course.courseid" type="primary">{{recommend_course.coursename}}</el-link></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple-light hot-line"><p class="text-center">{{recommend_course.company}}</p></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{recommend_course.time_len}}</p></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{recommend_course.grade}}</p></div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{recommend_course.cost}}</p></div></el-col>
        </el-row>
        </div>
    </div>
</template>

<style scoped>
    #recommend-job-body div{
        margin-top:1rem;
        background-color:white;
    }
    .title-text{
        font-size:2rem;
    }
    .width-ty{
        width:60rem;
        box-sizing: border-box;
    }
    .flex-cen-near{
        display: flex;
        justify-content:center ;
        align-items:center;
    }
    .flex{
        display: flex;
        justify-content:flex-start;
        align-items:center;
    }
    .float-2{
        width:50%;
        float: left;
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 0px 0px;
    }
    .text-center{
        text-align: center;
    }
    .photo{
        height:100%;
        width:100%;
    }
    .border{
        border:0.5px solid;
        padding: 1rem 1rem 1rem 1rem;
    }
    #all{
        margin-left:3rem;
    }
    /*标签的样式 */
    .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .hot-line{
    height:90%;
  }
</style>

<script>
export default {
  name: "MyInfo",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  data() {
      return {
        display_num:5,
        recommend_jobs:[
           {"jobid": "123456",
            "contents": {
              "company": "百度",
              "require": {
                "edu_background": "本科及以上",
                "work_experence": "工作经验不限",
              },
              "reward": "2000k/月",
            },
            "jobname": "IT辅导老师"},
            {"jobid": "123457",
            "contents": {
              "company": "私人招聘",
              "require": {
                "edu_background": "不限学历",
                "work_experence": "工作经验不限",
              },
              "reward": "300元/h",
            },
            "jobname": "在线音乐辅导老师"},
            {"jobid": "123459",
            "contents": {
              "company": "私人招聘",
              "require": {
                "edu_background": "不限学历",
                "work_experence": "一年以上工作经验",
              },
              "reward": "500元/次",
            },
            "jobname": "实验研究员"}
        ],
        recommend_courses:[
          {"courseid": "1156",
          "company": "百度出品",
          "cost": "100.00元",
          "time_len": "2h/天*10天",
          "coursename": "python快速入门",
          "grade": "小白入门级"},
          {"courseid": "1157",
          "company": "中国大学mooc",
          "cost": "99.00元",
          "time_len": "3h/天*5天",
          "coursename": "c++进阶",
          "grade": "进阶版"},
          {"courseid": "1158",
          "company": "个人课程",
          "cost": "0.99元",
          "time_len": "1h/天*5天",
          "coursename": "教你何如养宠物",
          "grade": "小白入门级"},
        ],
        dynamicTags: ['后端', 'python', '爬虫'],
        inputVisible: false,
        inputValue: ''
      };
    },
     methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
    created() {
      //向后台发送ajax请求，拿回来渲染页面
        this.$http.get("http://rap2api.taobao.org/app/mock/297234/recommendjob?userid="+"123456").then((resjob)=>{
        //this.recommend_jobs=resjob.data
        }),
        this.$http.get("http://rap2api.taobao.org/app/mock/297234/recommendcourse?userid="+"123456").then((rescourse)=>{
        //this.recommend_courses=rescourse.data
        })
        }
};

</script>