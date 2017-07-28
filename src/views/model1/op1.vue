<template>
  <el-col :span="20" class="mx-box">

    这里是跳转示例页面

    <p>从第示例{{index}}过来的</p>

  </el-col>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
    }
  },
  mounted: function() {
    console.log(this.$route);
  },
  watch: {
    '$route' (to, from) {
      console.log(to);
      this.index = to.params.index;
    }
  }
}
</script>

<style>
</style>
