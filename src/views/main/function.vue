<template>
  <el-col :span="18" :offset="1" class="mx-padding-10">

    <h1>MxAdmin全局方法</h1>

    <h3>ajax 请求</h3>
    <ul>
      <li>get请求: this.mx_ajax.get('url', {'bb': 1}).then( r => {}).catch( r => {})</li>
      <li>post请求: this.mx_ajax.post('url', {'params1': 1}).then( r => {}).catch( r => {})</li>
      <li>文件上传: this.mx_ajax.xhr4File()</li>
    </ul>

    <h3>动画效果</h3>

    Velocity
    <ul>
      <li>Velocity(document.body, {opacity: 0.5 })</li>
      <li>使用方式参考: http://www.mrfront.com/docs/velocity.js/option.html</li>
    </ul>

    <h3>format 数据格式化处理</h3>
    <ul>
      <li>URL参数获取: this.mx_format.urlParams('url')</li>
    </ul>

    <h3>浏览器本地数据</h3>
    <ul>
      <li>设置cookie: this.mx_localData.addCookie('key', value, timeHours)</li>
    </ul>

  </el-col>
</template>

<script>
</script>

<style>
</style>
