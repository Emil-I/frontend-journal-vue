'use strict';

import {Session} from '../session/session';

export class Auth {
    constructor() {
        this.token = 'token';
        this.session = new Session;
        this.promise;
    }

    getUser(reload) {
        if (reload) {
            this.promise = null;
        }
    }

    isAuthenticated() {
        // console.log(this.token);
        console.log(this.session.getTokenId());
        return true;
    }
}