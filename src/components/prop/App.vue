<script >
  import myprops from './props.vue'
  export default {
    components:{myprops},
    data(){
      return{
        ad:0,
        logo:false
      }
    },methods:{
      add(){
        if(this.ad==0){
          this.logo=true;
          this.ad++
        }else if(this.ad==1){
          this.logo=false
          this.ad=0
        }
      }
    }
  }
</script>

<template>
  <div><h1>这是app组件11</h1></div>
  <div class="back" :class="logo ? 'ba':''"></div>
  <button @click="add()">点我添加颜色</button>
  <myprops title="队伍的编号" authou="吴滴滴"></myprops>
</template>

<style>
  .back{
    width: 500px;
    height: 500px;
    border: 1px solid red;
  }
  .ba{
    background-color: #0f6674;
  }
</style>