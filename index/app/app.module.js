import Vue from 'vue'
import App from './app.vue'
import envConfig from '../../config/env.config.js'

Vue.config.productionTip = false

// Записываю во Vue свой конфиг, что бы был доступен глобально
// BUG: не работает при билде
// Vue.envConfig = CONFIG;

// Vue.prototype.$envConfig = envConfig;
console.log('x');

new Vue({
  render: h => h(App)
}).$mount('#app')
