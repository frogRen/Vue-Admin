<template>
  <el-col :span="18" :offset="1">

    <div class="mx-boxsmall">
      <h2>charts示例</h2>
      <p>使用 Echarts 组件</p>
      官方示例: <a target=_blank href="http://echarts.baidu.com/examples.html">http://echarts.baidu.com/examples.html</a>
      <p>全局没有配置,需要单个vue按需引入. 如果不使用请删除package.json中的包配置</p>
      <p>Echarts 相对复杂,有需要的场景使用. 这里的示例选取的简单数据展示, 主要参考使用方法</p>
    </div>

    <div class="mx-box">
      <div class="charts" id="charts1"></div>
    </div>

    <div class="mx-box">
      <div class="charts" id="charts2"></div>
    </div>

    <div class="mx-box">
      <div class="charts" id="charts3"></div>
    </div>

  </el-col>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      option1: {
        title: {
          text: '柱状图'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      option2: {
        title : {
          text: '饼图',
          subtext: '纯属虚构',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1548, name:'搜索引擎'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
        ]
      },
      option3: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        series: [
        {
          name: '中国',
          type: 'map',
          mapType: 'china',
          selectedMode : 'multiple',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data:[
          {name:'广东', selected:true}
          ]
        }
        ]
      },

    }
  },
  mounted() {
    let myChart1 = echarts.init(document.getElementById('charts1'));
    myChart1.setOption(this.option1);

    let myChart2 = echarts.init(document.getElementById('charts2'));
    myChart2.setOption(this.option2);

    let myChart3 = echarts.init(document.getElementById('charts3'));
    myChart3.setOption(this.option3);
  },
}
</script>

<style>
.charts {
  width: 100%;
  height: 500px;
}
</style>
