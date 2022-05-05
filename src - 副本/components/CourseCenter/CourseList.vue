<template>
  <div id="all">
    <!--搜索框-->
    <div id="search-box" class="flex-center" style="margin:2rem 0rem 2rem 0rem;width:100%;">
      <!--级联选择器-->
        <div class="block">
            <el-cascader
                v-model="value"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange">
        </el-cascader>
        </div>
        <!--搜索输入框-->
        <div style="width:40rem;">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
    <div id="courses" v-for='(course,index) in courses.slice(begin,end)' v-if='index%3==0'>
        <!--三列课程列表-->
      <div class="flex-center">
        <div class="border course">
          <!--第一列视频图片-->
          <div style="height:85%;white:100%;">
            <a href="https://www.baidu.com"><img class="cover-photo" src="../../assets/photo/homephoto/lrshow/l1.jpg"></a>
          </div>
          <!--底栏视频的点击量、价格等信息-->
          <div style="height:15%;white:100%;border-top:solid 0.5px;" class="flex-begin">
            <i class="el-icon-view" style="margin-left:0.3rem"></i>
            <p class="vedio-info-font">156</p>
            <i class="el-icon-star-off" style="margin-left:0.5rem"></i>
            <p class="vedio-info-font">12</p>
            <p class="vedio-info-font" style="margin-left:6rem">￥0.00元</p>
          </div>
        </div>
        <div v-if="index + 1 < courses.length" class="border course">
          <!--第二列视频图片-->
          <div style="height:85%;white:100%;">
            <a href="https://www.baidu.com"><img class="cover-photo" src="../../assets/photo/homephoto/lrshow/l1.jpg"></a>
          </div>
          <!--底栏视频的点击量、价格等信息-->
          <div style="height:15%;white:100%;border-top:solid 0.5px;" class="flex-begin">
            <i class="el-icon-view" style="margin-left:0.3rem"></i>
            <p class="vedio-info-font">156</p>
            <i class="el-icon-star-off" style="margin-left:0.5rem"></i>
            <p class="vedio-info-font">12</p>
            <p class="vedio-info-font" style="margin-left:6rem">￥0.00元</p>
          </div>
        </div>
        <div v-else class="course">
        </div>
        <div v-if="index + 2 < courses.length" class="border course">
          <!--第三列视频图片-->
          <div style="height:85%;white:100%;">
            <a href="https://www.baidu.com"><img class="cover-photo" src="../../assets/photo/homephoto/lrshow/l1.jpg"></a>
          </div>
          <!--底栏视频的点击量、价格等信息-->
          <div style="height:15%;white:100%;border-top:solid 0.5px;" class="flex-begin">
              <i class="el-icon-view" style="margin-left:0.3rem"></i>
              <p class="vedio-info-font">156</p>
              <i class="el-icon-star-off" style="margin-left:0.5rem"></i>
              <p class="vedio-info-font">12</p>
              <p class="vedio-info-font" style="margin-left:6rem">￥0.00元</p>
          </div>
        </div>
        <div v-else class="course">
        </div>
      </div>
    </div>
    <div class="flex-center">
      <div id="fanye">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="show_number"
            layout="prev, pager, next, jumper"
            :total="res_course_number">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .vedio-info-font{
      font-size:0.2rem;
    }
    .cover-photo{
      height:100%;
      width: 100%;
    }
    .course{
        width:15rem;
        height: 9rem;
        margin:0.2rem 0.2rem 0.2rem 0.2rem;
    }
    .flex-center{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .flex-begin{
      display:flex;
        justify-content:begin;
        align-items:center;
    }
    .border{
        border:solid 0.5px;
    }
</style>

<script>

export default {
  name: "CourseList",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  data() {
    return {
            //搜索框的变量
            input1: '',
            input2: '',
            input3: '',
            select: '',
            value:[],
            options:[],
            //翻页的变量
            currentPage1: 1,
            begin:0,//begin和end分别为当前页展示的的job数组开始和结束的下标
            show_number:30,//一页展示的数据数
            end:30-1,//show_number-1
            //翻页的变量end
            res_course_number:0,
            courses:[],
            keword:"python",
    };
  },
  methods: {
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        console.log(val)
        this.begin=(val-1)*this.show_number
        this.end=(val)*this.show_number-1
        console.log(this.begin, this.end)
      }
  },
  created() {
    //向后台发送ajax请求，拿回来渲染页面
    this.$http
      .get("http://rap2api.taobao.org/app/mock/297234/coursesearch?keword="+this.keyword)
      .then((res) => {
        this.courses = res.data.courselist;
        this.res_course_number=res.data.number;
        console.log(this.courses);
      });
    //级联选择器的样式
    this.options=this.$http.get("http://rap2api.taobao.org/app/mock/297234/jobtype_select").then((res)=>{
            console.log(res.data)
            this.options=res.data[0]
        
      })
  },
};

</script>