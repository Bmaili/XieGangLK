<template>
  <div id="all">
    <el-row>
      <el-col :span="24"
        ><!--搜索框-->
        <div class="grid-content bg-purple-dark" id="search-box-col">
          <div id="search-box">
            <el-input
              placeholder="请输入内容"
              v-model="search_input"
              class="input-with-select"
            >
              <el-select
                v-model="select_modle"
                slot="prepend"
                placeholder="请选择"
                class="choose-with-select"
              >
                <el-option label="工作" value="job"></el-option>
                <el-option label="课程" value="course"></el-option>
              </el-select>

              <el-button slot="append" icon="el-icon-search" @click="search_click()"> 搜索 </el-button>
            </el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--热门职位推荐-->
    <div id="hot-job-box">
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >热门岗位</el-link
      >
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >python</el-link
      >
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >java</el-link
      >
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >行政专员</el-link
      >
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >辅导老师</el-link
      >
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >品牌公关</el-link
      >
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >产品运营</el-link
      >
      <el-link
        type="info"
        href="https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title"
        class="grid-content bg-purple hot-job"
        >市场营销</el-link
      >
    </div>
    <!--广告轮播图-->
    <el-row type="flex" class="row-bg" justify="center" id="advert-box">
      <el-col :span="3">
        <div class="grid-content bg-purple adverment">
          <div class="adverment-left"><a href="https://www.baidu.com"><img class="advertise-photo" src="../../assets/photo/homephoto/lrshow/l1.jpg"></a></div>
          <div class="adverment-left"><a href="https://www.baidu.com"><img class="advertise-photo" src="../../assets/photo/homephoto/lrshow/l2.jpg"></a></div>
          <div class="adverment-left"><a href="https://www.baidu.com"><img class="advertise-photo" src="../../assets/photo/homephoto/lrshow/l3.jpg"></a></div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple-light adverment">
          <div class="block">
            <span class="demonstration"></span>
            <el-carousel>
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <img v-bind:src="item.url" class="advertise-photo"><!--用v-band动态绑定数据-->
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple adverment">
          <div class="grid-content bg-purple adverment">
          <div class="adverment-right"><a href="https://www.baidu.com"><img class="advertise-photo" src="../../assets/photo/homephoto/lrshow/r1.jpg"></a></div>
          <div class="adverment-right"><a href="https://www.baidu.com"><img class="advertise-photo" src="../../assets/photo/homephoto/lrshow/r2.jpg"></a></div>
          <div class="adverment-right"><a href="https://www.baidu.com"><img class="advertise-photo" src="../../assets/photo/homephoto/lrshow/r3.jpg"></a></div>
        </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<style>

/*搜索栏的样式 */
.el-select .el-input {
  width: 100%;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
#search-box-col {
  display: flex;
  justify-content: center;
}
#search-box {
  width: 60%;
  margin-top:3rem;
}
.choose-with-select {
  width: 8rem;
}
/*热门标签的样式 */
#hot-job-box {
  margin-top: 0.5rem;
  margin: auto;
  width: 50%;
}
.hot-job {
  margin-left: 1rem;
}
/*广告位的样式 */
#advert-box{
  margin-top: 2rem;
}
.adverment {
  height: 30rem;
  height: 100%;
  width: 100%;
}
/*广告位左边 */
.adverment-left{
  height: 33%;
  width: 100%;
}
/*广告位右边 */
.adverment-right{
  height: 33%;
  width: 100%;
}
/*广告位中间 */
.advertise-photo {
  height: 100%;
  width: 100%;
}

</style>
<script>
export default {
  data() {
    return {
      //轮播图的图片
      imgList: [
                {id:0,url:require('../../assets/photo/homephoto/sideshow/p1.jpg')},
                {id:1,url:require('../../assets/photo/homephoto/sideshow/p2.jpg')},
                {id:2,url:require('../../assets/photo/homephoto/sideshow/p3.jpg')},
                {id:3,url:require('../../assets/photo/homephoto/sideshow/p4.jpg')},       
            ],
      search_input: "",
      select_modle:"job"
    };
  },
  methods: {
    search_click: function(){
      if(this.select_modle=="job"){
        if(this.search_input==""){//如果没有输入关键字，则将关键字视为default
          this.$router.push('/jobcenter/'+"default")
        }
        else{
          this.$router.push('/jobcenter/'+this.search_input)
        }
      }
      else if(this.select_modle=="course"){
        if(this.search_input==""){//如果没有输入关键字，则将关键字视为default
          this.$router.push('/coursecenter/'+"default")
        }
        else{
          this.$router.push('/coursecenter/'+this.search_input)
        }
      }
    }
  }
};
</script>