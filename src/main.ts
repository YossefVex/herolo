import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import burger from '@/components/burger.vue'
import navbar from '@/views/navbar.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// Vue.use(require('vue-moment'));
// Vue.use(moment)
Vue.component('navbar', navbar)

// Filters
Vue.filter('str2OnlyNum', function(val: String){
  return val.replace(/\D/g, "");;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
