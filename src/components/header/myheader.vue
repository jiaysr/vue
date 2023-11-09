<script>
export default {
  name: "myheader",
  props:['title','bg','color']
}
</script>

<template>
<div class="header" :style="{backgroundColor:bg,color:color}">{{title}}</div>
</template>

<style >
  .header{
    width: 100%;
    height: 50px;
    background-color: #0b2e13;
    text-align: center;
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
</style>