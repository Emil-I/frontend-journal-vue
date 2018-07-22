import {
  required,
  minLength,
  sameAs,
  email
} from 'vuelidate/lib/validators'

import {
  User
} from '../../../../common/Authentication/user/user'

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
      password_confirm: null,

      user: new User()
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

    signup: async function () {
      if (this.errorHandlerForm()) return;

      let dataForm = {
        email: this.email,
        name: this.name,
        password: this.password
        // password_confirm: this.password_confirm
      }


      try {

        let signup = await this.user.signup(dataForm);
        console.log(signup);

      } catch (error) {
        console.log(error);
      }

    }
  }
}