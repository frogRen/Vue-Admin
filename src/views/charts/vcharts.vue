<template>
  <el-col :span="18" :offset="1">

    <div class="mx-boxsmall">
      <h2>charts示例</h2>
      <p>使用 V-Charts 组件</p>
      文档: <a target=_blank href="https://elemefe.github.io/v-charts/">https://elemefe.github.io/v-charts/</a>
      <p>全局没有配置,需要单个vue按需引入. 如果不使用请删除package.json中的包配置</p>
      <p>vcharts 相对轻量,数据结构简单 简单场景可用</p>
    </div>

    <div class="mx-box">
      <p>折线图:</p>
      <ve-line :data="chart1Data" :settings="chart1Settings"></ve-line>
    </div>

    <div class="mx-box">
      <p>柱状图:</p>
      <ve-histogram :data="chart1Data" :settings="chart1Settings"></ve-histogram>
    </div>

    <div class="mx-box">
      <p>饼图:</p>
      <ve-pie :data="chart1Data" :settings="chart2Settings"></ve-pie>
    </div>

    <div class="mx-box">
      <p>环图:</p>
      <ve-ring :data="chart1Data" :settings="chart3Settings"></ve-ring>
    </div>

    <div class="mx-box">
      <p>瀑布图:</p>
      <ve-waterfall :data="chart2Data" :settings="chart4Settings"></ve-waterfall>
    </div>

    <div class="mx-box">
      <p>漏斗图:</p>
      <ve-funnel :data="chart1Data" :settings="chart5Settings"></ve-funnel>
    </div>

    <div class="mx-box">
      <p>雷达图:</p>
      <ve-radar :data="chart1Data" :settings="chart6Settings"></ve-radar>
    </div>

    <div class="mx-box">
      <p>地图:</p>
      <ve-map :data="chart3Data" :settings="chart7Settings"></ve-map>
    </div>

  </el-col>
</template>

<script>
import VeLine from 'v-charts/lib/line'
import VeHistogram from 'v-charts/lib/histogram'
import VePie from 'v-charts/lib/pie'
import VeRing from 'v-charts/lib/ring'
import VeFunnel from 'v-charts/lib/funnel'
import VeWaterfall from 'v-charts/lib/waterfall'
import VeRadar from 'v-charts/lib/radar'
import VeMap from 'v-charts/lib/map'

export default {
  data() {
    return {
      chart1Data: {
        columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ],
      },
      chart2Data: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      },
      chart3Data: {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 }
        ]
      },
      chart1Settings: {
        dimension: ['日期'],
        metrics: [ '销售额-1季度', '销售额-2季度', '占比'],
        axisSite: {
          right: ['占比']
        },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['销售额', '占比'],
        area: true,
        stack: {
          '销售额': ['销售额-1季度', '销售额-2季度']
        }
      },
      chart2Settings: {
        dimension: '日期',
        metrics: '销售额-1季度',
        dataType: 'KMB',
        selectedMode: 'single',
        hoverAnimation: false,
        radius: 100,
        offsetY: 200
      },
      chart3Settings: {
        dimension: '日期',
        metrics: '销售额-1季度',
        dataType: 'KMB',
        selectedMode: 'single',
        hoverAnimation: false,
        radius: [100, 80],
        offsetY: 200
      },
      chart4Settings: {
        dimension: '活动',
        metrics: '时间',
        totalNum: '24',
        dataType: 'KMB',
        totalName: '总时间',
        remainName: '剩余时间'
      },
      chart5Settings: {
        dimension: '日期',
        metrics: '销售额-1季度',
        dataType: 'KMB',
        sequence: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日'],
        ascending: false
      },
      chart6Settings: {
        dimension: ['日期'],
        metrics: ['销售额-1季度', '销售额-2季度', '占比'],
        dataType: { '占比': 'percent' }
      },
      chart7Settings: {
        position: 'china'
      },

    }
  },
  components: {
    VeLine, VeHistogram, VePie, VeRing, VeFunnel, VeWaterfall, VeRadar, VeMap
  }
}
</script>

<style>
</style>
