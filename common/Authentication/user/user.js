'use strict';

import axios from 'axios';
import qs from 'qs';

/**
 * @User resource
 * @param apiUrl
 * @param headers
 * @param token
 * @param axios.create({})
 * @returns {*}
 * @constructor
 */
export class User {
    constructor() {
        // this.apiUrl = 'https://jsonplaceholder.typicode.com/';
        this.apiUrl = 'http://127.0.0.1:3003/';
        this.headers = {
            'accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded'
        }
        this.token = null;

        if (this.token) {
            this.headers.Authorization = `Bearer ${this.token}`;
        }

        this.query = axios.create({
            baseURL: this.apiUrl,
            headers: this.headers
        });
    }

    get Token() {
        return this.token;
    }

    set Token(token) {
        this.token = token;
    }

    // METHODS
    me() {
        return this.query.get('/users');
    }

    onePost(id) {
        return this.query.get(`posts/${id}`);
    }

    allPosts() {
        return this.query.get('/posts');
    }

    signup(data) {
        return this.query.post('/register', qs.stringify(data));
    }

    signin(data) {
        return this.query.post('/login', qs.stringify(data));
    }

}