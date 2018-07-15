'use strict';

export class Session {
    constructor() {
        this.session = {};
    }

    start(response, remember) {
        this.session.token = authResultToTken(response);

        if (remember) {
            // recorde into cookies
            // set localStorage
            this.session.token.remember = true;
        }
    }

    destroy() {
        this.session.token = null;
        // clear cookies
        // remove token with localStorage
    }

    getTokenId() {
        // return 'sdsdsd4s5d4sds54ds54dsd5s';
        // return this.session.token && this.session.token.id;
        return this.session.token;
    }
}

function authResultToTken(result) {
    const data = result.data;
    return {
        id: data.api_token,
        userId: data.id,
        userName: data.name
    }
}