'use strict';

export class ACL {
    constructor(role) {
        this.role = role;
    }

    isAdmin(data) {
        if (data.role === 'admin') {
            return true;
        }
        return false;
    }

    isManager(data) {
        if (data.role === 'manager') {
            return true;
        }
        return false;
    }
}