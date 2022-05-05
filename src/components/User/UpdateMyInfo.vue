<template>
  <div >
    <el-button type="text" @click="dialog = true">修改个人信息</el-button>
    <el-drawer
      class="it"
      title="个人信息"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
      style="width:120rem"
      >
      <div class="demo-drawer__content">
        <!--上传头像-->
        
        <div class="flex-center" style="margin-top:12rem;margin-left:12rem">
          <div><!--上传按钮-->
            <el-upload
              class="upload-demo"
              action="http://101.43.198.16:10000/user/upAvatar"
              :headers="theheader"
              :on-preview="handlePreview"
              :on-success="updateSuccess"
              :on-error="updateError"
              :on-remove="handleRemove"
              :file-list="fileList"
              :limit="1"
              :on-exceed="handleExceed"
              :before-remove="beforeRemove"
              list-type="picture">
              <el-button size="small" type="primary">上传头像</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </div>
        <div class="flex-center" style="margin-top:5rem;margin-left:12rem">
          <el-input id="inputname"  style="width:10rem;margin-right:3rem;" v-model="newname" placeholder="请输入新的昵称"></el-input>
          <el-button id="buttonname" @click="updatename" type="success">点击修改昵称</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<style scoped>
  .it{
    background-color:rgb(213, 185, 185);
  }
  .flex-center{
    display: flex;
    justify-content: flex-start;
    align-items:center;
  }
  /*上传头像按钮 */
  
</style>

<script>
import {http_raw_token} from "../../requests/requests"
export default {
  data() {
    return {
      theheader:{"Authorization":this.$store.state.token},
      newname:"",
      fileList: [],
      table: false,
      dialog: false,
      loading: false,
      formLabelWidth: '80px',
      timer: null,
      picpath:"",//要及时更新图片信息
    };
  },
  methods: {
    /*上传头像的函数 */
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      updateSuccess(response, file, fileList){
        console.log(response)
        if(this.picpath=responsecode==200){
          this.$alert("头像上传成功")
          this.picpath=response.date.avatar
        }
      },
      updateError(file, fileList){
        $this.alert("上传失败,请检查文件是否符合要求或稍后再试")
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
    /* */
    handleClose(done) {
      done();//关闭窗口
      this.$alert("请刷新网页以更新信息")
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    updatename(){
      if(this.newname.length>0){
        http_raw_token.post("http://101.43.198.16:10000/user/upData",JSON.stringify({
                    "userName": this.newname
                  })
              ).then((res)=>{
                console.log(res.data)
               if(res.data.code==200){
                 this.$alert("昵称修改成功")
               }
               else{
                 this.$alert(res.data.msg)
               }
            })
      }
      else{
        this.$alert("昵称不能为空")
      }
    }
  }
}
</script>