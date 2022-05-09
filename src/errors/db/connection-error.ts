import { CustomError } from '../base/custom-errors';

export class DatabaseConnectionError extends CustomError {
    reason = 'Error: DatabaseConnectionError';
    statusCode = 500;

    constructor() { 
        super('DatabaseConnectionError');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{
            message: this.reason,

        }]
    };
}
