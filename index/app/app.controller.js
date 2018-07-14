'use strict';

// COMPONENTS
import signinFrame from './components/signin/signin.vue'
import signupFrame from './components/signup/signup.vue'
import recoveryFrame from './components/recovery/recovery.vue'

// DIRECIVES
import {
  ToggleModal
} from '../../common/directives/toggle-modal.directive'

// SERVICES
import {
  Auth
} from '../../common/Authentication/auth/auth';

import {
  User
} from '../../common/Authentication/user/user';

export default {
  name: 'app',

  data: () => {
    return {
      openModal: 'modals-close'
    }
  },

  methods: {
    setModal: function () {
      let windowHash = window.location.hash;
      windowHash = windowHash.slice(1);
      (windowHash !== '' && windowHash !== this.openModal) ? this.openModal = windowHash: this.openModal = 'modals-close';
    },

    getPosts: async function () {
      try {

        let user = new User;

        let query = await user.onePost(1);
        console.log(query.data)

      } catch (err) {
        console.log(err);
      }

    }
  },

  created: function () {
    this.setModal();

    const auth = new Auth;

    if (auth.isAuthenticated()) {
      console.log('to admin panel');
    }
  },

  directives: {
    ToggleModal
  },

  components: {
    signinFrame,
    signupFrame,
    recoveryFrame
  }
}