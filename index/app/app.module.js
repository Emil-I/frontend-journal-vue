import Vue from 'vue'
import App from './app.vue'
// import envConfig from '../../config/env.config.js'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// SERVICES
import {
  User
} from '../../common/Authentication/user/user';

const user = new User();

import {
  Session
} from '../../common/Authentication/session/session';

const session = new Session();

import {
  Auth
} from '../../common/Authentication/auth/auth';

const auth = new Auth(user, session);

import {
  ACL
} from '../../common/acl/acl';

// VUEX
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    storeTest: 'test store',
    session: session,
    auth: auth,
    user: user
  },
  mutations: {
    changeTest(state) {
      state.storeTest = 'store test string is changed'
    }
  }
});



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')