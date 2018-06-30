import {
  required,
  minLength,
  email
} from 'vuelidate/lib/validators';

export default {
  name: 'signinFrame',

  props: {
    title: String
  },

  data: () => {
    return {
      email: null,
      password: null
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    }
  },

  methods: {
    checkForm: function() {
      return true;
    },

    send: function() {

    },

    signin: function() {

    }
  }
}