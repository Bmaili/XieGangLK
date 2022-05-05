<template>
    <div id="all" class="border">
        <!--创建视频集和上传视频按钮-->
        <div>
            
            <!--创建视频集-->
            <div style="margin-bottom:2rem;display:flex;justify-content:flex-end">
               
                <el-button type="primary">创建视频集</el-button>
            </div>

        </div>
        <!--视频集的显示-->
        <div>
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="date"
            label="上传时间"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称"
            width="120">
            </el-table-column>
            <el-table-column
            prop="type"
            label="视频类别"
            width="160">
            </el-table-column>
            <el-table-column
            prop="num"
            label="视频数量"
            width="80">
            </el-table-column>
            <el-table-column
            prop="abstract"
            label="视频简介"
            width="300">
            </el-table-column>
            <el-table-column
            prop="id"
            label="id"
            width="120">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>

<style scoped>
  .border{
    border:solid 0.5px;
  }
  #all{
      margin:2rem 2rem 2rem 2rem ;
      padding:2rem 2rem 2rem 2rem;
  }
</style>

<script>
export default {
  name: "UpdateVedio",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  data() {
      return {
         tableData:[
          {
            "date": "2021-05-02",
            "name": "十大编程语言的介绍",
            "type": "IT-互联网",
            "num": "9",
            "abstract": "介绍了当下热门的top10编程语言：java,python,c,c++,c#,go......",
            "id": 5623245
          },
          {
            "date": "2021-05-21",
            "name": "python入门",
            "type": "IT-互联网",
            "num": "9",
            "abstract": "适合小白的python入门教程",
            "id": 5623246
          }
        ],
        //示例：filelist[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        //filelist是显示已上传文件的列表
        fileList: []
      };
    },
    methods: {
        //下面是视频列表按钮的methods
        handleClick(row) {
            console.log(row);
        },
        //下面是上传文件按钮的methodds
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    created(){
        //一开始就从后台加载用户上传的视频列表
        this.$http.get("http://rap2api.taobao.org/app/mock/297234/user/updatevedio?userid="+"123456").then((res)=>{
            //this.tableData=res.data
           // console.log(this.tableData)
        })
    }
  
};

</script>