<template>
    <div id="all" class="" style="width: 100%;margin:2rem 2rem 2rem 2rem">
        <h3 style="width: 60%;margin:3rem 0rem 2rem 29rem">兴趣圈管理</h3>
        <div id="table" class="border">
            <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 60%;margin:3rem 0rem 2rem 12rem">
            <el-table-column
            label="Title"
            prop="title">
            </el-table-column>
            <el-table-column
            label="Name"
            prop="name">
            </el-table-column>
            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">移除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>

<style scoped>
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
  name: "MyHobbyCenter",
  //在DOM中使用的时候， 改为全小写， 单词之间用 - 连接
  components: {},
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
  },
  data() {
      return {
        tableData:[
            {
            "title": "如何寻找合适的课程",
            "name": "王小虎",
            },
            {
            "title": "python跟java的优劣",
            "name": "IT白老师",
            },
            {
            "title": "如何练出均匀的腹肌",
            "name": "黄教练"
            },
            {
            "title": "如何找到合适的兼职",
            "name": "李女士",
            }
        ],
      };
    },
  created(){
      this.$http.get("http://rap2api.taobao.org/app/mock/297234/userhoblist?userid="+"131345").then((res)=>{
            //this.tableData=res.data.tableData
            //console.log(this.tableData)
        })
  }
};

</script>