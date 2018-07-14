import axios from 'axios';

let headers = {
    'Content-type': 'application/x-www-form-urlencoded',
}

let token = null;

if (token) {
    headers.Authorization = `Bearer ${token}`;
}

export const HTTP = axios.create({
    baseURL: 'http://127.0.0.1:3003/',
    headers: headers
});