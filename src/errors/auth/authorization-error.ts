import { CustomError } from '../base/custom-errors';

export class AuthorizationError extends CustomError {
    statusCode = 401;

    constructor() { 
        super('AuthorizationError');
        

        Object.setPrototypeOf(this, AuthorizationError.prototype);
    }

    serializeErrors() {
        return [{ message: 'Not Authorized to perform request'}]
    }; 
    
};