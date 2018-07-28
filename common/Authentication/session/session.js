'use strict';

import Cookies from 'js-cookie';

export class Session {
    constructor() {
        this.session = {
            token: null,
            tokenKey: 'vueFirstAppToken'
        };

        
        // TODO протестировать COOKIES
        let json = window.localStorage.getItem(this.session.tokenKey);

        if (!json) {
            json = Cookies.get(this.session.tokenKey);
        }

        try {
            this.session.token = JSON.parse(json);
        } catch (err) {
            // console.log(err)
        }
    }

    /**
     *
     * @param response
     * @param remember
     */

    start(response, remember) {
        this.session.token = authResultToTken(response);

        Cookies.set(this.session.tokenKey, this.session.token, {
            path: '/'
        });

        if (remember) {
            window.localStorage.setItem(this.session.tokenKey, JSON.stringify(this.session.token));
        }
    }

    /**
     *
     * Clear cookies and localStorage
     */

    destroy() {
        this.session.token = null;

        Cookies.remove(this.session.tokenKey, {
            path: '/'
        });

        window.localStorage.removeItem(this.session.tokenKey);
    }

    /**
     *
     * @returns {boolean|*|null}
     */

    getTokenId() {
        return this.session.token && this.session.token.id;
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