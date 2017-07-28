<template>
  <div id="app">
    <!-- 页面头部内容 -->
    <div is="adminHead"></div>

    <el-row class="container">
      <!-- 左侧导航 -->
      <div is="Sidebar"></div>

      <!-- 内容部分(主要需要开发的部分) -->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

    </el-row>

    <!-- 页面底部内容 -->
    <div is="adminFoot"></div>
  </div>
</template>

<script>
import adminHead from './components/Header.vue'
import adminFoot from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import store from './store/store.js'

export default {
  store: store,

  components: {
    adminHead, adminFoot, Sidebar
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
