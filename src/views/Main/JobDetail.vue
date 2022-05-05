<template>
    <div id="all">
        <!--广告位-->
        <div id="adversement-box" class="flex-center" style="width:100%;height:6rem;margin-top:2rem">
            <div id="adversement" class="center-block">
                <img style="width:100%;height:100%;" src="../../assets/photo/detailjob/adversement1.jpg">
            </div>
        </div>
        <!--职位详情-->
        <div id="job-detail-box" class="flex-center" style="width:100%;margin-top:2rem">
            <div id="job-detail" class="center-block">
                <el-row>
                    <!--详情页面中间-左栏-->
                    <el-col :span="16" >
                        <div class="grid-content bg-purple">
                            <div class="flex-space-between">
                                <div style="font-size:2rem">{{jobinfo.jobname}}</div><div style="font-size:2rem">{{jobinfo.salary}}</div>
                            </div>
                            <div style="margin-top:1rem">招聘单位:  {{jobinfo.recruiting_unit}}</div>
                            <div class="flex-start">
                                <div>{{jobinfo.edu_background}}</div>
                                <div style="margin:0rem 0.7rem 0rem 0.7rem">|</div>
                                <div>招聘人数:{{jobinfo.need_people}}</div>
                            </div>
                        </div>
                    </el-col>
                    <!--详情页面中间-右栏-->
                    <el-col :span="8"><div class="grid-content bg-purple-light flex-center">  <el-button type="primary">申请职位</el-button></div></el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <!--详情页面中间-左栏-->
                    <el-col :span="16" >
                        <div class="grid-content bg-purple">
                            <div class="">
                                <h1>职位信息</h1>
                                <h3>岗位职责</h3>
                                <div v-for="(item,index) in jobinfo.duty">
                                    <div>{{index+1}}、{{item}}</div>
                                </div>
                                
                                <h3>任职资格</h3>
                                <div v-for="(item,index) in jobinfo.qulification">
                                    <div>{{index+1}}、{{item}}</div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <!--详情页面中间-右栏-->
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light border" style="padding:0.4rem 0.4rem 0.4rem 0.4rem; border-bottom:solid 0px">
                            <div style="text-align:center">招聘发布者信息</div>
                            <el-divider></el-divider>
                            <div>形式:{{jobinfo.recruiting_unit}}</div>
                            <el-divider></el-divider>
                            <div  class="flex-center"><el-button type="primary">查看所有职位/公司信息</el-button></div>
                        </div>
                        <div class="grid-content bg-purple-light border" style="padding:0.4rem 0.4rem 0.4rem 0.4rem">
                            <div style="text-align:center">相关课程推荐</div>
                            <el-divider></el-divider>
                            <div>课程类型推荐:{{recommend_course}}</div>
                            <el-divider></el-divider>
                            <div  class="flex-center"><el-button type="primary">查看课程</el-button></div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div id="job-buttom1" class="flex-center" style="width:100%;margin:2rem 0rem 2rem 0rem">
            <div class="center-block"  style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
                <!--折叠面板-->
                <div style="margin:1rem 1rem 1rem 1rem">猜您想看:</div>
                <el-link style="margin:1rem 1rem 1rem 1rem" type="primary">1、教你如何写简历</el-link><br>
                <el-link style="margin:1rem 1rem 1rem 1rem" type="primary">2、求职须知</el-link><br>
                <el-link style="margin:1rem 1rem 1rem 1rem" type="primary">3、面试技巧</el-link><br>
            </div>
        </div>
        <div class="flex-center">
            
            <div class="center-block" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
                <p style="margin:1rem 1rem 1rem 1rem">资料推荐</p>
                <div id="job-buttom2" class="flex-start" style="width:100%;margin:2rem 0rem 2rem 0rem " v-for='(item,index) in hob_recommend.title_list' v-if='index%3==0'>
                    <li style="margin:1rem 1rem 1rem 1rem" class="hob-recommend-li">{{hob_recommend.title_list[index]}}</li>
                    <li style="margin:1rem 1rem 1rem 1rem" class="hob-recommend-li" v-if="index + 1 < hob_recommend.title_list.length">{{hob_recommend.title_list[index+1]}}</li>
                    <li style="margin:1rem 1rem 1rem 1rem" class="hob-recommend-li" v-if="index + 2 < hob_recommend.title_list.length">{{hob_recommend.title_list[index+2]}}</li>
                </div>
            </div>
        </div>
        <el-divider></el-divider>
    </div>
</template>

<style scoped>
    .hob-recommend-li{
        margin-right:1rem;
    }
    .center-block{
        height:100%;
        width:60%;
    }
    .border{
        border:solid 0.3px;
    }
    .flex-center{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .flex-start{
        display:flex;
        justify-content:start;
        align-items:center;
    }
    .flex-space-between{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
</style>

<script>

export default({
    name:"JobDetail",
    data(){
        return{
            jobinfo:{},//工作详细信息
            hob_recommend:{}//兴趣圈帖子推荐
        }
    },
    methods: {
    },
    computed:{
    //推荐课程，数组转化为字符串
    recommend_course:function(){
        let courses=""
        for (let course of this.jobinfo.relate_course_type){
            courses=courses+" "+course
        }
        return courses
        
    }
    },
    //初始化加载工作职位信息
    created(){
        //通过this.$route.params.jobid获得路由中传过来的参数
        this.$http.get("http://rap2api.taobao.org/app/mock/297234/detailjob?jobid="+this.$route.params.jobid).then((res)=>{
            this.jobinfo=res.data
        })
        this.$http.get("http://rap2api.taobao.org/app/mock/297234/hobcenter").then((res)=>{
            this.hob_recommend=res.data
            console.log(this.hob_recommend)
        })
    }
})

</script>
