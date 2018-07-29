import Vue from 'vue'
import App from './app.vue'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false;

// VUEX
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        testKey: 'test'
    },
    mutations: { }
});

import router from './app.routers';

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#appAdmin')