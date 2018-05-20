import Vue from 'vue'

let envConfig = Vue.$envConfig;
console.log('y');

export default {
  name: 'signinFrame',

  props: {
    title: String
  },

  // data: () => {
  //   return {
  //     message: 'test',
  //     books: [{
  //         name: 'name one'
  //       },
  //       {
  //         name: 'name two'
  //       }
  //     ]
  //   }
  // },

  methods: {
    log() {
      console.log(envConfig);
      debugger
    },

    logTwo: () => {
      console.log('log two');
    }
  }
}
