'use strict';

export class Auth {
    constructor() {
        this.token = 'token';
    }

    isAuthenticated () {
        console.log(this.token);
        return true;
    }
}