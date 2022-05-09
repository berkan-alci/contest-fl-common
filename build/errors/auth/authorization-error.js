"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
const custom_errors_1 = require("../base/custom-errors");
class AuthorizationError extends custom_errors_1.CustomError {
    constructor() {
        super('AuthorizationError');
        this.statusCode = 401;
        Object.setPrototypeOf(this, AuthorizationError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Not Authorized to perform request' }];
    }
    ;
}
exports.AuthorizationError = AuthorizationError;
;
