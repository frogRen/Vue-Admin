<template>
  <!-- 右侧导航 -->

  <el-col :span="4" class="sidebar">
    <h5>右侧导航</h5>
    <el-menu default-active="2" class="el-menu">

      <router-link :to="{ path:'/main' }" class="mx-router">
        <el-menu-item index="a0">
          仪表盘
        </el-menu-item>
      </router-link>

      <router-link :to="{ path:'/function' }" class="mx-router">
        <el-menu-item index="a1">
          全局方法
        </el-menu-item>
      </router-link>

      <el-submenu index="a2">
        <template slot="title">图表charts</template>

        <router-link to="/charts/vcharts" class="mx-router">
          <el-menu-item index="a2-1">vcharts</el-menu-item>
        </router-link>
        <router-link to="/charts/echarts" class="mx-router">
          <el-menu-item index="a2-2">Echarts</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="1">
        <template slot="title">示例导航</template>

        <el-menu-item index="1-1">选项1-1</el-menu-item>
        <el-menu-item index="1-2">选项1-2</el-menu-item>
        <el-menu-item index="1-3">选项1-3</el-menu-item>

        <el-submenu index="1-4">
          <template slot="title">选项1-4</template>
          <el-menu-item index="1-4-1">选项14-1</el-menu-item>
        </el-submenu>

        <el-menu-item-group>
          <template slot="title">分组1-5</template>
          <el-menu-item index="1-5-1">选项15-1</el-menu-item>
          <el-menu-item index="1-5-2">选项15-2</el-menu-item>
        </el-menu-item-group>

      </el-submenu>

      <router-link :to="{ path:'/model1/op1/1' }" class="mx-router">
        <el-menu-item index="3">
          跳转示例一
        </el-menu-item>
      </router-link>
      <router-link :to="{ path:'/model1/op1/2' }" class="mx-router">
        <el-menu-item index="4">
          跳转示例二
        </el-menu-item>
      </router-link>

    </el-menu>
  </el-col>

</template>

<script>
export default {
  mounted: function() {
    this.$nextTick(function () {
      let diff = document.getElementById('header').offsetHeight + document.getElementById('footer').offsetHeight;
      let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      this.$el.style.minHeight = height - diff + 'px';
    });
  }
}
</script>

<style>
.sidebar {
  background-color: #eef1f6;
  min-height: 600px;
  overflow-x: hidden;
}
</style>
