import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MxAdmin from './assets/package'
import './assets/css/mx.admin.css'
import Velocity from 'velocity-animate'

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(MxAdmin);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  router: router,
  components: { App }
})
