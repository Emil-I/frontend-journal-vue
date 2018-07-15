'use strict';

// SERVICES
import {
    Auth
} from '../../common/Authentication/auth/auth';

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
        const auth = new Auth;

        if (!auth.isAuthenticated()) {
            window.location = '/#signup';
        }
    }


}