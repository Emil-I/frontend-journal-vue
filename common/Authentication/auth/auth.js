'use strict';

export class Auth {
    constructor(user, session) {
        this.promise;
        this.user = user;
        this.session = session;
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
        let isTokenId = this.session.getTokenId();
        return Boolean(isTokenId);
    }
}