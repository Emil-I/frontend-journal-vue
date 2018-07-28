import {
  required,
  minLength,
  sameAs,
  email
} from 'vuelidate/lib/validators'

export default {
  name: 'signupFrame',

  props: {
    title: String,
  },

  data: () => {
    return {
      email: null,
      name: null,
      password: null,
      password_confirm: null
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    },
    password_confirm: {
      required,
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    errorHandlerForm: function () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v.$invalid);
        return true;
      } else {
        return false;
      }
    },

    test: function() {
      let user = this.$store.state.user;
      console.log(user);
    },

    signup: async function () {
      if (this.errorHandlerForm()) return;

      let dataForm = {
        email: this.email,
        name: this.name,
        password: this.password
      }


      try {
        let user = this.$store.state.user;
        let signup = await user.signup(dataForm);
        console.log(signup)

      } catch (error) {
        console.log(error);
      }

    }
  }
}