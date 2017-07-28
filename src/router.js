import VueRouter from 'vue-router';

const routes = [
  {
      path: '/',
      redirect: '/main'
  },
  {
    path: '/main',
    component: resolve => require(['./views/main/index.vue'], resolve)
  },
  {
    path: '/function',
    component: resolve => require(['./views/main/function.vue'], resolve)
  },
  {
    path: '/charts/vcharts',
    component: resolve => require(['./views/charts/vcharts.vue'], resolve)
  },
  {
    path: '/charts/echarts',
    component: resolve => require(['./views/charts/echarts.vue'], resolve)
  },
  {
    path: '/model1/op1/:index',
    component: resolve => require(['./views/model1/op1.vue'], resolve)
  }
]

export default new VueRouter({
  routes
});
