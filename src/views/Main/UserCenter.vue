<!--  -->
<template>
  <div>
        <el-row type="flex" class="row-bg" justify="center">
            <!--个人中心左侧导航栏-->
            <el-col :span="2">
                <el-tabs class="navigation-box" :tab-position="tabPosition" style="height: 100%;" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我的信息" name="myinfo"></el-tab-pane>
                    <el-tab-pane label="简历中心" name="resumecenter"></el-tab-pane>
                    <el-tab-pane label="已上传视频" name="updatevedio"></el-tab-pane>
                    <el-tab-pane label="我的兴趣圈" name="myhobbycenter"></el-tab-pane>
                    <el-tab-pane label="谁看过我" name="whoseeme"></el-tab-pane>
                    <el-tab-pane label="我的收藏" name="mycollect"></el-tab-pane>
                    <el-tab-pane label="我的申请" name="myapply"></el-tab-pane>
                    <el-tab-pane label="安全中心" name="safecenter"></el-tab-pane>
                    <el-tab-pane label="隐私设置" name="privacyset"></el-tab-pane>
                </el-tabs>
            </el-col>
            <!--个人中心右侧展示栏-->
            <el-col :span="18">
                <div class="grid-content bg-purple-light" style="margin-right:0rem;">
                    <!--下面展示用户不同信息的视图-->
                    <router-view></router-view>
                </div>
            </el-col>
            
        </el-row>
    </div>
</template>

<style scoped>
  #main{
    background-color:rgb(247, 242, 242);
  }
  .navigation-box{
        width: 78%;
        background-color:white;
        margin:0rem 0rem 0rem 0rem;
        padding: 0rem 0rem 0rem 0rem;
    }
    el-link{
        display: block;
    }
</style>>

<script>

export default {
  name: "UserCenter",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  data() {
      return {
        activeName: '我的信息',
        tabPosition: 'right'
      };
    },
    //点击切换路由
    methods: {
        handleClick(tab, event) {
        this.$router.push('/usercenter/'+this.activeName) 
    }
    }
};

</script>


