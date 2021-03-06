// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import App from './App'
//import echarts from 'echarts'
import * as echarts from 'echarts';
import $ from 'jquery'
import titleComponent from './title.component.vue';
Vue.component('vue-title', titleComponent);

import locale from 'element-ui/lib/locale/lang/en' // lang i18n
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
