"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_errors_1 = require("../base/custom-errors");
class RequestValidationError extends custom_errors_1.CustomError {
    constructor(errors) {
        super('RequestValidationError');
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((e) => {
            return { message: e.msg, field: e.param };
        });
    }
    ;
}
exports.RequestValidationError = RequestValidationError;
