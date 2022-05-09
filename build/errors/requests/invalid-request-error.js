"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRequestError = void 0;
const custom_errors_1 = require("../base/custom-errors");
class InvalidRequestError extends custom_errors_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidRequestError.prototype);
    }
    serializeErrors() {
        return [{
                message: this.message,
            }];
    }
    ;
}
exports.InvalidRequestError = InvalidRequestError;
;
