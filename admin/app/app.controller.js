'use strict';

// SERVICES
import {
    Auth
} from '../../common/Authentication/auth/auth';

export default {
    name: 'appAdmin',

    data: () => {
        return {
            data: 'hello admin',
            auth: new Auth()
        }
    },

    methods: { },

    created: function() {
        console.log(this.data);
    }


}