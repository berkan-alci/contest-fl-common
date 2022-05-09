"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_errors_1 = require("../base/custom-errors");
class NotFoundError extends custom_errors_1.CustomError {
    constructor() {
        super('NotFoundError');
        this.statusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Requested route not found' }];
    }
    ;
}
exports.NotFoundError = NotFoundError;
;
