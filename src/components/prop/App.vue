<script >
  import myprops from './props.vue'
  export default {
    components:{myprops},
    data(){
      return{
        ad:0,
        logo:false,
        logo1:true
      }
    },
  }
</script>

<template>
  <div><h1>这是app组件11</h1></div>
  <div class="back" :class="[logo ? 'ba':'',logo1 ? 'da':'']"></div>
  <button @click="logo=!logo">点我添加颜色</button>
  <button @click="logo1=!logo1">点我添加颜色</button>
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
  .da{
    background-color: red;
  }
</style>