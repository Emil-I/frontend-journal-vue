'use strict';

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
    }


}