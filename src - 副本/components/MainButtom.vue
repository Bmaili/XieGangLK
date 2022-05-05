<template>
    <div id="all">
    </el-row>
        <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8" class="">
            <div class="grid-content bg-purple left">
                <a href="https://www.baidu.com"><img class="erweima" src="../assets/photo/homephoto/buttom/app.jpg"></a>
            </div>
        </el-col>
        <el-col :span="2">
            <div class="grid-content bg-purple center-box">
                <div class="center-text title"><p>简介</p></div>
                <div class="center-text"><el-link type="info">关于我们</el-link></div>
                <div class="center-text"><el-link type="info">法律协议</el-link></div>
                <div class="center-text"><el-link type="info">隐私条款</el-link></div>
            </div>
        </el-col>
        <el-col :span="2">
            <div class="grid-content bg-purple-light center-box">
                <div class="center-text title"><p>合作</p></div>
                <div class="center-text"><el-link type="info">加入我们</el-link></div>
                <div class="center-text"><el-link type="info">联系我们</el-link></div>
                <div class="center-text"><el-link type="info">友情链接</el-link></div>
            </div>
        </el-col>
        <el-col :span="2">
            <div class="grid-content bg-purple-light center-box">
                <div class="center-text title"><p>帮助</p></div>
                <div class="center-text"><el-link type="info">帮助中心</el-link></div>
                <div class="center-text"><el-link type="info">常见问题</el-link></div>
                <div class="center-text"><el-link type="info">新手引导</el-link></div>
                <div class="center-text"><el-link type="info">防骗指南</el-link></div>
            </div>
        </el-col>
        <el-col :span="2">
            <div class="grid-content bg-purple-light center-box">
                <div class="center-text title"><p>导航</p></div>
                <div class="center-text"><el-link type="info">网站地图</el-link></div>
                <div class="center-text"><el-link type="info">职位搜索</el-link></div>
                <div class="center-text"><el-link type="info">简历中心</el-link></div>
            </div>
        </el-col>
        <el-col :span="8" class="">
            <div class="grid-content bg-purple right">
                <a href="https://www.baidu.com"><img class="erweima" src="../assets/photo/homephoto/buttom/wechat.jpg"></a>
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  };
</script>
<style scoped>
/*二维码样式 */
    .erweima{
        width: 100%;
        height:100%;
    }
    .center-text{
        text-align: center;
    }
    .left{
        height:8rem;
        width:8rem;
        position:absolute;
        left:10rem ;
 
    }
    .right{
        height:9rem;
        width:9rem;
        position:absolute;
        right:10rem ;
    
    }
    
    .title{
        font-size:1rem;
    }
    #all{
        margin:0px 0px 0px 0px;
        padding:0px 0px 2rem 0px;
        width: 100%;
    }
    .side{
        border: solid;
        height: 100%;
    }
    
</style>