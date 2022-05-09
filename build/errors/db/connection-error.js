"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_errors_1 = require("../base/custom-errors");
class DatabaseConnectionError extends custom_errors_1.CustomError {
    constructor() {
        super('DatabaseConnectionError');
        this.reason = 'Error: DatabaseConnectionError';
        this.statusCode = 500;
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{
                message: this.reason,
            }];
    }
    ;
}
exports.DatabaseConnectionError = DatabaseConnectionError;
