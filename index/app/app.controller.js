// COMPONENTS
import signinFrame from './components/signin/signin.vue'
import signupFrame from './components/signup/signup.vue'
import recoveryFrame from './components/recovery/recovery.vue'
// DIRECIVES
import {ToggleModal} from '../../directives/toggle-modal.directive'

export default {
  name: 'app',

  data: () => {
    return {
      openModal: 'modals-close'
    }
  },

  methods: {
    setModal: function() {
      let windowHash = window.location.hash;
      windowHash = windowHash.slice(1);
      (windowHash !== '' && windowHash !== this.openModal) ? this.openModal = windowHash : this.openModal = 'modals-close';
    }
  },

  created: function() {
    this.setModal();
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