import Vue from 'vue'
import App from './app.vue'
// import axios from 'axios';
// import envConfig from '../../config/env.config.js'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
// Vue.use(axios)

Vue.config.productionTip = false;
// Записываю во Vue свой конфиг, что бы был доступен глобально
// BUG: не работает при билде
// Vue.envConfig = CONFIG;

// Vue.prototype.$envConfig = envConfig;
console.log('x');

new Vue({
  render: h => h(App)
}).$mount('#app')