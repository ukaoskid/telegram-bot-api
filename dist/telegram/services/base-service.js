"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseService {
    get token() {
        return this._token;
    }
    set token(token) {
        this._token = token;
    }
    constructor(token) {
        this._token = token;
    }
}
exports.BaseService = BaseService;
