import Vue from 'vue'

let config = Vue.CONFIG;

export default {
  name: 'signinFrame',

  props: {
    title: String
  },

  data: () => {
    return {
      message: 'test',
      books: [{
          name: 'name one'
        },
        {
          name: 'name two'
        }
      ]
    }
  },

  methods: {
    log() {
      console.log(config.apiUrl);
    },

    logTwo: () => {
      console.log('log two');
    }
  }
}
