<template>
    <div id="all">
        <div>
            <div class="item">
                <div class="flex-space-between" style="width:60%;margin-left:3rem">
                    <p style="margin-left:3rem">个人优势</p>
                    <div><el-link id="edit0" type="primary" @click="edit($event)">编辑</el-link></div>
                </div>
                <div class="content-box" v-show="edit0">
                    <div>
                    <el-input
                    style="margin:1rem 0rem 0rem 7rem;width:30rem"
                    type="textarea"
                    :rows="7"
                    placeholder="请输入内容"
                    v-model="textarea0">
                    </el-input>
                </div>
                <el-button  type="primary" style="margin:0rem 0rem 2rem 19rem" id="edit0save" @click="save($event)">保存</el-button>
                </div>
                <el-divider></el-divider>
            </div>
            <div class="item">
                <div class="flex-space-between" style="width:60%;margin-left:3rem">
                    <p style="margin-left:3rem">在校经历</p>
                    <div><el-link id="edit1" type="primary" @click="edit($event)">编辑</el-link></div>
                </div>
                <div class="content-box" v-show="edit1">
                    <div>
                    <el-input
                    style="margin:1rem 0rem 0rem 7rem;width:30rem"
                    type="textarea"
                    :rows="7"
                    placeholder="请输入内容"
                    v-model="textarea1">
                    </el-input>
                </div>
                <el-button  type="primary" style="margin:0rem 0rem 2rem 19rem" id="edit1save" @click="save($event)">保存</el-button>
                </div>
                <el-divider></el-divider>
            </div>
            <div class="item">
                <div class="flex-space-between" style="width:60%;margin-left:3rem">
                    <p style="margin-left:3rem">获奖情况</p>
                    <div><el-link id="edit2" type="primary" @click="edit($event)">编辑</el-link></div>
                </div>
                <div class="content-box" v-show="edit2">
                    <div>
                    <el-input
                    style="margin:1rem 0rem 0rem 7rem;width:30rem"
                    type="textarea"
                    :rows="7"
                    placeholder="请输入内容"
                    v-model="textarea2">
                    </el-input>
                </div>
                <el-button  type="primary" style="margin:0rem 0rem 2rem 19rem" id="edit2save" @click="save($event)">保存</el-button>
                </div>
                <el-divider></el-divider>
            </div>
            <div class="item">
                <div class="flex-space-between" style="width:60%;margin-left:3rem">
                    <p style="margin-left:3rem">项目经历</p>
                    <div><el-link id="edit3" type="primary" @click="edit($event)">编辑</el-link></div>
                </div>
                <div class="content-box" v-show="edit3">
                    <div>
                    <el-input
                    style="margin:1rem 0rem 0rem 7rem;width:30rem"
                    type="textarea"
                    :rows="7"
                    placeholder="请输入内容"
                    v-model="textarea3">
                    </el-input>
                </div>
                <el-button  type="primary" style="margin:0rem 0rem 2rem 19rem" id="edit3save" @click="save($event)">保存</el-button>
                </div>
                <el-divider></el-divider>
            </div>
            <div class="item">
                <div class="flex-space-between" style="width:60%;margin-left:3rem">
                    <p style="margin-left:3rem">其他</p>
                    <div><el-link id="edit4" type="primary" @click="edit($event)">编辑</el-link></div>
                </div>
                <div class="content-box" v-show="edit4">
                    <div>
                    <el-input
                    style="margin:1rem 0rem 0rem 7rem;width:30rem"
                    type="textarea"
                    :rows="7"
                    placeholder="请输入内容"
                    v-model="textarea4">
                    </el-input>
                </div>
                <el-button  type="primary" style="margin:0rem 0rem 2rem 19rem" id="edit4save" @click="save($event)">保存</el-button>
                </div>
                <el-divider></el-divider>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content-box{
        border:solid 0.5px rgb(130, 199, 226);
        margin:3rem 13rem 3rem 13rem ;
    }
    .flex-center{
        justify-content: center;
        align-items:center;
    }
    .edit{
        width:40rem;
    }
    .flex-center{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .flex-space-between{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
    .border{
        border:solid 1px;
    }

</style>

<script>
export default {
  name: "ResumeCenter",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  methods: {
      edit(event) {
        //根据点击按钮的id，找到对应的class，id=>class
        let name=event.currentTarget.id
        if (name=="edit0"){
            this.edit0=true
        }
        else if(name=="edit1"){
            this.edit1=true
        }
        else if(name=="edit2"){
            this.edit2=true
        }
        else if(name=="edit3"){
            this.edit3=true
        }
        else if(name=="edit4"){
            this.edit4=true
        }
      },
      save(event) {
        //根据点击按钮的id，找到对应的class，id=>class
        let name=event.currentTarget.id
        console.log(name)
        if (name=="edit0save"){
            this.edit0=false
        }
        else if(name=="edit1save"){
            this.edit1=false
        }
        else if(name=="edit2save"){
            this.edit2=false
        }
        else if(name=="edit3save"){
            this.edit3=false
        }
        else if(name=="edit4save"){
            this.edit4=false
        }
        
      }
  },
  data() {
      return {
        edit0:false,
        edit1:false,
        edit2:false,
        edit3:false,
        edit4:false,
        edit5:false,
        edit6:false,
        textarea1:"",
        is_show1:false,
      }
    },
  
};

</script>