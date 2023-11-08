<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
<input type="text" placeholder="请输入学生id" v-model="cid">
  <button  @click="show">点我查询</button>
  <table class="table">
    <thead>
    <tr class="table-tr">
      <th>#</th>
      <th>学生姓名</th>
      <th>班级id</th>
      <th>生日</th>
      <th>邮箱</th>
      <th>操作</th>
    </tr>
    </thead>
    <!-- 表格的主体区域 -->
    <tbody>
    <!-- TODO：循环渲染表格的每一行数据 -->
    <tr v-for="(item,index) in item" :key="item.id">
      <td>{{index+1}}</td>
      <td>{{item.sname}}</td>
      <td>
      {{item.classId}}
      </td>
      <td>{{item.birthday}}</td>
      <td >
  {{item.email}}
      </td>
      <td >
        <a href="#" @click="del(item.id)">删除</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" >
      import axios from "axios";

      export  default {
        name:"user",
        data() {
          return {
            cid:'',
            item:[],

          }
        },
        created() {

        },
        methods:{
          show(){
            if(!this.cid){
              axios({
                method:'get',
                url:'http://192.168.9.27:8088/test/sellInfo'
              }).then((res)=>{
                console.log(res.data);
                this.item=res.data
                console.log(this.item)
              });
            }else {
              this.item=[]
              axios({

                method:'get',
                url:'http://192.168.9.27:8088/test/getclassIdInfo/'+this.cid
              }).then((res1)=>{
                console.log(res1)
                this.item=res1.data
                // console.log(this.item)
              });
            }

          },
          del(id){
            axios({
              method:'get',
              url:'http://192.168.9.27:8088/test/delInfo/'+id
            }).then((res2)=>{
              console.log(res2);

            });

          }
        }

      }

</script>
<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>


<style >
  .table{
    height: 300px;
    width: 100%;
    border: 1px solid red;
  }
  .table-tr{
    border-bottom: 1px solid black;
  }

</style>