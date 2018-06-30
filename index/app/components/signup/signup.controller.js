import {
  required,
  minLength,
  sameAs,
  email
} from 'vuelidate/lib/validators';


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
      if(this.$v.$invalid) {
        console.log(this.$v.$invalid);
        return true;
      }else {
        return false;
      }
    },

    send: function (data) {
      return new Promise((resolve, reject) => {
        if (!this.errorHandlerForm()) {
          return resolve('sended');
        } else {
          return reject('not send');
        }
      });
    },

    signup: function () {
      if (this.errorHandlerForm()) return;

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