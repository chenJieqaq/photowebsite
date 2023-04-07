import Vue from 'vue'
import App from './App.vue'


import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueMeta from 'vue-meta';
import router from './router/index'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




