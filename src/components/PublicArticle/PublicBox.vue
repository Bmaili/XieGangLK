
<template>
  <div id="all">
    <div class="MainBody">
      <el-row :gutter="20">
        <el-col :span="3"
          ><div class="grid-content bg-purple">
            <img
              src="../../assets/01.png"
              style="width: 200px; height: 100px"
              alt=""
            /></div
        ></el-col>
        <!--文章类型下拉框-->
        <div id="select-box">
          <i>请选择文章类别：</i>
          <el-select  v-model="choose_typeid" placeholder="请选择">
            <el-option
              v-for="item in article_types"
              :key="item.typeId"
              :label="item.typeName"
              :value="item.typeId">
            </el-option>
          </el-select>
        </div>
        

        <el-col :span="11"><div class="grid-content bg-purple">
            <el-container class="biaodan">
              <el-header>
              </el-header>
              <el-container>
                <el-main>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 25 }"
                    placeholder="请输入内容，在文本框下面可上传图片哦~"
                    v-model="textcontent"
                    class="content"
                  >
                    kncbahbncn kjznjxnn ckzncjkzk
                  </el-input>
                </el-main>
              </el-container>
              <el-container>
                <el-upload
                  class="upload-demo"
                  action="http://101.43.198.16:10000/article/upArcPic"
                  :headers="theheader"
                  :on-preview="handlePreview"
                  :on-success="updateSuccess"
                  :on-error="updateError"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">上传图片</el-button>
                  <div slot="tip" class="el-upload__tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </el-container>
            </el-container>
          </div></el-col
        >
        <el-col :span="6">
          <div class="dongTu">
            <img
              src="../../assets/02.gif"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-footer class="fabu">
          <el-button type="primary" @click="publicArticle">发布<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-footer>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
#select-box{
  margin:3rem 0rem 0rem 11rem;
}
.upload-demo {
  padding-left: 80%;
}
.dongTu {
  margin-top: 25%;
  margin-left: 0%;
  position: absolute;
}
.MainBody {
  background: url(../../assets/200.gif) no-repeat;
  /* position: fixed; */
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}

.fabu {
  padding-left: 23%;
}
.biaodan {
  padding-top: 1%;
  /* padding-right: 10%; */
}
.biaoqian {
  margin: 10px;
}
.el-footer {
  position: fixed;
  width: 100%;
  /* height: 30%px; */
  bottom: 0;
  z-index: 999;
  background-color: #f0f2f5;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
<script>
import {http_raw_token} from "../../requests/requests"
export default {
  name: "PulicBox",
  data() {
    return {
      article_types:[],
      choose_typeid:"",//下拉框中选择的文章类别id
      picpath:"",//上传图片的返回地址
      theheader:{"Authorization":this.$store.state.token},
      fileList: [],
      imgList: [
        { id: 0, url: require("../../assets/photo/homephoto/sideshow/p1.jpg") },
        { id: 1, url: require("../../assets/photo/homephoto/sideshow/p2.jpg") },
        { id: 2, url: require("../../assets/photo/homephoto/sideshow/p3.jpg") },
        { id: 3, url: require("../../assets/photo/homephoto/sideshow/p4.jpg") },
      ],
      imgSrc: ["../../assets/00.jpg", "../../assets/01.png"],
      texttitle: "",
      textcontent: "",
    };
  },
  methods: {
    getTypeList(){//获取分类列表
      this.$http
                  .get("http://101.43.198.16:10000/article/getType", {
                    headers: { Authorization: this.$store.state.token },
                  })
                  .then((res) =>{
                    this.article_types=res.data.date
                  })
    },
    publicArticle(){//发表文章
      if(this.textcontent.length > 0){
        alert(this.choose_typeid)
        http_raw_token.post("http://101.43.198.16:10000/article/upArticle",JSON.stringify({
                    "context": this.textcontent,
                    "picPath": [this.picPath],
                    "typeId": this.choose_typeid
                  })
              
              ).then((res)=>{
                if(res.data.code==200){
                  this.$confirm('发表成功，是否返回文章列表页面', '提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定',
                    
                    type: 'warning'
                  }).then(() => {
                    this.$router.push('/hobbycenter/default')
                  }).catch(() => {
                              
                  });
                }
            })}
          else{
            this.$alert("请输入文章内容")
          }
    },
    updateSuccess(response, file, fileList){
      this.picpath=response.date.picPuth
    },
    updateError(file, fileList){
      $this.alert("上传失败,请检查文件是否符合要求或稍后再试")
    },
    handleRemove(file, fileList) {
      this.picpath=""
    },
    handlePreview(file) {
      
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}`)
    },
  },
  created(){
    this.getTypeList()
  }
};
</script>