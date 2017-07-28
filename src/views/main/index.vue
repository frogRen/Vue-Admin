<template>
  <el-col :span="20">

    <div class="mx-box">
      <img src="../../assets/img/logo.png">
      {{ msg }}
      <el-button @click.native="startHacking">Let's do it</el-button>

      <div>
        <p>该后台模版基于vue2.0+element-ui搭建 方便添加到mx2项目中使用</p>
        <p>
          使用说明,gitlab项目地址:
          <a target=_blank href="https://git.imoxiu.cn/web_fe/vue-admin">https://git.imoxiu.cn/web_fe/vue-admin</a>
        </p>
        <p>
          element-ui 组件:
          <a target=_blank href="http://element.eleme.io/#/zh-CN/component/installation">http://element.eleme.io/#/zh-CN/component/installation</a>
        </p>
        <p>
          vue知识:
          <a target=_blank href="https://cn.vuejs.org/v2/guide/">https://cn.vuejs.org/v2/guide/</a>
        </p>
      </div>
    </div>
    <div class="mx-box">
      <div class="mx-box-header">
        文本示例
      </div>

      <p class="mx-text-i">信息文本</p>
      <p class="mx-text-s">成功文本</p>
      <p class="mx-text-w">警告文本</p>
      <p class="mx-text-e">错误文本</p>
    </div>

    <el-row>
      <el-col :offset="1" :span="4" class="mx-boxsmall mx-bgc-i mx-text-f">背景</el-col>
      <el-col :offset="1" :span="4" class="mx-boxsmall mx-bgc-s mx-text-f">颜色</el-col>
      <el-col :offset="1" :span="4" class="mx-boxsmall mx-bgc-w mx-text-f">效果</el-col>
      <el-col :offset="1" :span="4" class="mx-boxsmall mx-bgc-e mx-text-f">测试</el-col>
    </el-row>

    <h3></h3>
  </el-col>
</template>

<script>
export default {
  data () {
    return {
      msg: '欢迎来到demo后台'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  },

  components: {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
