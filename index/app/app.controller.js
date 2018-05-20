import signinFrame from './components/signin/signin.vue'
import signupFrame from './components/signup/signup.vue'
import recoveryFrame from './components/recovery/recovery.vue'

export default {
  name: 'app',

  data: () => {
    return {
      openModal: 'modals-close'
    }
  },

  methods: {
    setOpenModal: function(name) {
      name !== 'close' ? this.openModal = name : this.openModal = 'modals-close';
    }
  },

  components: {
    signinFrame,
    signupFrame,
    recoveryFrame
  }
}
