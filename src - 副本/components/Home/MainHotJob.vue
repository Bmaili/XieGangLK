<template>
  <div>
    <el-divider></el-divider>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="text-center hot-title">热门工作</div>
        </div>
      </el-col>
      
  </el-row>
    <el-row type="flex" class="row-bg" justify="center" id="jobtype-choose">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <!--热门类型切换栏-->
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="IT互联网" name="IT互联网"></el-tab-pane>
              <el-tab-pane label="金融" name="金融"></el-tab-pane>
              <el-tab-pane label="教育培训" name="教育培训"></el-tab-pane>
              <el-tab-pane label="法律咨询" name="法律咨询"></el-tab-pane>
              <el-tab-pane label="绘画艺术" name="绘画艺术"></el-tab-pane>
              <el-tab-pane label="医疗健康" name="医疗健康"></el-tab-pane>
              <el-tab-pane label="房地产/建筑" name="房地产/建筑"></el-tab-pane>
              <el-tab-pane label="旅游" name="旅游"></el-tab-pane>
              <el-tab-pane label="运动健身" name="运动健身"></el-tab-pane>
              <el-tab-pane label="宠物服务" name=" 宠物服务"></el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
    </el-row>
    <!--热门工作-->
    <el-row id="hot-job-body" type="flex" class="row-bg" justify="center" v-for="hotjob in hot_jobs" :key=hotjob.jobid>
      <el-col :span="3"><div style="text-align:center;" class="grid-content bg-purple hot-line"><el-link  :href="'#/jobdetail/'+hotjob.jobid" type="primary">{{hotjob.jobname}}</el-link></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple-light hot-line"><p class="text-center">{{hotjob.contents.company}}</p></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{hotjob.contents.require.edu_background}}</p></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{hotjob.contents.require.work_experence}}</p></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{hotjob.contents.reward}}</p></div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        display_num:6,//热门工作展示的个数
        activeName: 'IT互联网',//开始展示的类别
        //存储从后台获取的工作,先把数据写死，用于展示
        hot_jobs:[
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
        ]
      };
    },
    methods: {  
      handleClick() {
        //向后台发送ajax请求，拿回来渲染页面
        /*
        this.$http.get("http://rap2api.taobao.org/app/mock/297234/jobs?jobtype="+this.activeName).then((res)=>{
        this.hot_jobs=res.data
        console.log(res.data);
      })*/
      }
    },
    created() {
      //this.handleClick();//网页一打开就显示某个热门领域的工作
    }
  };
</script>

<style scoped>
  .hot-title{
    margin-top: 2rem;
    font-size:2rem;
    color:hsl(0, 0%, 0%);
  }
  #jobtype-choose{
    margin-top:2rem;
  }
  .hot-line{
    height:90%;
  }
  .text-center{
    text-align:center;
  
  }
  #hot-job-body div{
    margin-top:1rem;
    background-color:white;
  }
 
</style>