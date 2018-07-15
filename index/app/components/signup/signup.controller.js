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

    send: async function (data) {
      try {
        
        let request = await HTTP.get('users');
        console.log(request.data);
        return true;

      } catch (error) {
        console.log(error);
        return false;
      }
    },

    signup: function () {
      // if (this.errorHandlerForm()) return;

      let dataForm = {
        email: this.email,
        name: this.name,
        password: this.password,
        password_confirm: this.password_confirm
      }

      this.send(dataForm)
        .then(() => {
          console.log('sended');
        })
        .catch((err) => {
          console.error(err);
        });

    }
  }
}