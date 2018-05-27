import signinFrame from './components/signin/signin.vue'
import signupFrame from './components/signup/signup.vue'
import recoveryFrame from './components/recovery/recovery.vue'

// v-toggleModal:close='setModal'

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
    toggleModal: {
      inserted: function(el, binding) {
        el.onclick = e => {
          e.preventDefault();
          toggleModal(binding.arg);
          binding.value();
        }
      }
    }
  },

  components: {
    signinFrame,
    signupFrame,
    recoveryFrame
  }
}


/**
 * @constructor
 * @toggleModal
 */

function toggleModal(modal) {
  let lastValModalHash = window.location.hash;
  lastValModalHash = lastValModalHash.slice(1);
  (modal !== "close" && modal !== lastValModalHash) ? window.location.hash = modal : window.location.hash = '';
};
