<template>
  <!-- 头部导航 -->
  <el-row class="header" id="header">
    <el-col :span="10" :offset="2">
      <router-link to="/" class="mx-router">
        <span class="title">MxAdmin</span>
        <span class="desc">vue</span>
      </router-link>
    </el-col>
    <el-col :span="3" :push="8">
      [游客]
    </el-col>
  </el-row>
</template>

<script>
</script>

<style>
.header {
  background-color: #324157;
  color: #fff;
  line-height: 50px;
}
.header .title{
  font-size: 26px;
  margin-left: 10%;
  font-weight: 300;
}
</style>
