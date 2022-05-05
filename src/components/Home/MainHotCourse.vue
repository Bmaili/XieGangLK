<template>
  <div>
    <el-divider></el-divider>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="text-center hot-title">热门课程</div>
        </div>
      </el-col>
      
  </el-row>
    <el-row type="flex" class="row-bg" justify="center" id="coursetype-choose">
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
                <el-tab-pane label="宠物服务" name="宠物服务"></el-tab-pane>
            </el-tabs>

          </div>
        </el-col>
    </el-row>
      
    <!--热门工作-->
    <el-row id="hot-course-body" type="flex" class="row-bg" justify="center" v-for="hotcourse in hot_courses" :key=hotcourse.courseid>
      <el-col :span="3"><div style="text-align:center" class="grid-content bg-purple hot-line"><el-link  :href="'#/jobdetail/'+hotcourse.courseid" type="primary">{{hotcourse.coursename}}</el-link></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple-light hot-line"><p class="text-center">{{hotcourse.company}}</p></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{hotcourse.time_len}}</p></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{hotcourse.cost}}</p></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{hotcourse.grade}}</p></div></el-col>
    </el-row>
    <el-divider></el-divider>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        display_num:6,//热门工作展示的个数
        activeName: 'IT互联网',//开始展示的类别
        //存储从后台获取的工作，暂时把数据写死
        hot_courses:[
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
        ]
      };
    },
    methods: {  
      handleClick() {
        //向后台发送ajax请求，拿回来渲染页面
        /*console.log();
        this.$http.get("http://rap2api.taobao.org/app/mock/297234/course?coursetype="+this.activeName).then((res)=>{
        this.hot_courses=res.data
        //this.hot_course=res.data.slice(0,display_num)可以实现数组切片
      })*/
      }
    },
    created() {
      //由于要把数据写死，这里就先注释掉
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
  #coursetype-choose{
    margin-top:2rem;
  }
  .hot-line{
    height:90%;
    
  }
  .text-center{
    text-align:center;
  }
  #hot-course-body div{
    margin-top:1rem;
    background-color:white;
  }
 
</style>