import {
  required,
  minLength,
  email
} from 'vuelidate/lib/validators';

import {
  User
} from '../../../../common/Authentication/user/user';
import {
  Session
} from '../../../../common/Authentication/session/session';

export default {
  name: 'signinFrame',

  props: {
    title: String
  },

  data: () => {
    return {
      email: null,
      password: null,

      user: new User(),
      session: new Session()
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
        
        let response = await this.user.signin(data);
        console.log(response.data);

        // this.session.start(response, true);

      } catch (error) {
        console.log(error);
      }

    }
  }
}