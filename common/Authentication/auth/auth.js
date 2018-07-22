'use strict';

import {
    Session
} from '../session/session';

import {
    User
} from '../user/user';

export class Auth {
    constructor() {
        this.promise;
        this.user = new User;
        this.session = new Session;
    }

    getUser(reload) {
        if (reload) {
            this.promise = null;
        }

        if (!this.session.getTokenId()) {
            return new Promise((resolve, reject) => {
                return reject(null);
            });
        }

        if (!this.promise) {
            this.promise = this.user.me()
                .then((user) => {
                    // this.acl.setUser(user);
                    return user;
                })
                .catch((error) => {
                    this.session.destroy();
                    throw error;
                });
        }

        return this.promise;
    }

    logout() {
        this.session.destroy();
        return this.getUser(true);
    }

    isAuthenticated() {
        return Boolean(this.session.getTokenId());
        // return !!(this.session.getTokenId());
    }
}