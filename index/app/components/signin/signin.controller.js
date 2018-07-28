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
    checkForm: function () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v.$invalid);
        return true;
      } else {
        return false;
      }
    },

    signin: async function () {

      if (this.checkForm()) return;

      let data = {
        email: this.email,
        password: this.password
      }

      try {

        let state = this.$store.state;
        let session = state.session;
        let user = state.user;
        let response = await user.signin(data);

        if (response) {
          session.start(response, true);
          window.location = '/admin';
        }

      } catch (error) {
        console.log(error);
      }

    }
  }
}