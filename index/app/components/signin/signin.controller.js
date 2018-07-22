import {
  required,
  minLength,
  email
} from 'vuelidate/lib/validators';

import {
  User
} from '../../../../common/Authentication/user/user';

export default {
  name: 'signinFrame',

  props: {
    title: String
  },

  data: () => {
    return {
      email: null,
      password: null,

      user: new User()
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
      if(this.checkForm()) return;

      let data = {
        email: this.email,
        password: this.password
      }

      try {
        
        let user = await this.user.signin(data);
        console.log(user.data);

      } catch (error) {
        console.log(error);
      }

    }
  }
}