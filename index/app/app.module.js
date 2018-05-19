import Vue from 'vue'
import App from './app.vue'
import CONFIG from '../../config/env.config.js'

Vue.config.productionTip = false

Vue.CONFIG = CONFIG;

new Vue({
  render: h => h(App)
}).$mount('#app')
