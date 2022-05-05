<template>
    <div id="all">
        <div class="flex-center">
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
            <el-input :placeholder=this.$route.params.keyword v-model="input_keyword" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click.native="keyword_search_job()"></el-button>
            </el-input>
        </div>
    </div>
        <div>
            <el-row id="job-body" type="flex" class="row-bg" justify="center" v-for="job in joblist.slice(begin,end)" :key=job.jobid>
            <!--路由跳转一定要加#-->
            <el-col class="dif-color" :span="3"><div style="text-align:center;" class="grid-content bg-purple hot-line"><el-link  target="_blank" :href="'#/jobdetail/'+job.jobid" type="primary">{{job.jobname}}</el-link></div></el-col>
            <el-col class="dif-color" :span="3"><div class="grid-content bg-purple-light hot-line"><p class="text-center">{{job.contents.company}}</p></div></el-col>
            <el-col class="dif-color" :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{job.contents.require.edu_background}}</p></div></el-col>
            <el-col class="dif-color" :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{job.contents.require.work_experence}}</p></div></el-col>
            <el-col class="dif-color" :span="3"><div class="grid-content bg-purple hot-line"><p class="text-center">{{job.contents.reward}}</p></div></el-col>
            </el-row>
        </div>
        
        <div class="flex-center">
            <!--翻页设置-->
            <div class="block">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="show_number"
                layout="prev, pager, next, jumper"
                :total="res_job_number">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
    .border{
        border: solid 1px;
    }
    .flex-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #job-body div{
        margin-top:1rem;
    }
    .dif-color{
        background-color:rgb(220, 230, 235);
    }
</style>

<script>

export default({
    name:"JobList",
    data(){
        return{
            test:"testaaa",
            //搜索框的内容
            input_keyword: '',
            select: '',
            value:[],
            options:[],
            //翻页的变量
            currentPage1: 1,
            begin:0,//begin和end分别为当前页展示的的job数组开始和结束的下标
            show_number:15,//一页展示的数据数
            end:15-1,//show_number-1
            //翻页的变量end
            res_job_number:20,
            joblist:[{"jobid": "123450",
            "contents": {
              "company": "私人招聘",
              "require": {
                "edu_background": "硕士及以上",
                "work_experence": "工作经验不限",
              },
              "reward": "500元/h",
            },
            "jobname": "数学奥赛辅导"},
            {"jobid": "123449",
            "contents": {
              "company": "私人招聘",
              "require": {
                "edu_background": "学历不限",
                "work_experence": "工作经验不限",
              },
              "reward": "600元/天",
            },
            "jobname": "交通规划员"},
                
                {"jobid": "123451",
            "contents": {
              "company": "私人招聘",
              "require": {
                "edu_background": "学历不限",
                "work_experence": "工作经验不限",
              },
              "reward": "3000k/月",
            },
            "jobname": "在线健身教练"},
            {"jobid": "123452",
            "contents": {
              "company": "私人招聘",
              "require": {
                "edu_background": "学历不限",
                "work_experence": "工作经验不限",
              },
              "reward": "2500k/月",
            },
            "jobname": "美食老师"},

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
            "jobname": "实验研究员"},

                    ],

            keword:"python",
        }
    },
    methods: {
        keyword_search_job:function(){
                //点击按钮获取输入框的关键字
                console.log(this.input_keyword);
            },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        console.log(val)
        this.begin=(val-1)*this.show_number
        this.end=(val)*this.show_number-1
        console.log(this.begin, this.end)
            }
    },
    created(){
        /*
        //先加载初始的工作
        this.options=this.$http.get("http://rap2api.taobao.org/app/mock/297234/jobsearch?keword="+this.keword).then((res)=>{
            this.res_job_number=res.data.number
            this.joblist=res.data.joblist
            
      })*/
      this.options=this.$http.get("http://rap2api.taobao.org/app/mock/297234/jobtype_select").then((res)=>{
            this.options=res.data[0]
        
      })
    }
})

</script>
