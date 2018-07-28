'use strict';

import rootComponent from './components/root/root.vue';

export default {
    name: 'appAdmin',

    data: () => {
        return {
            data: 'hello admin'
        }
    },

    methods: { },

    created: function() {
        console.log(this.data);
    },

    components: {
        rootComponent
    }

}