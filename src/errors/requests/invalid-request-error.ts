import { CustomError } from '../base/custom-errors';

export class InvalidRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) { 
        super(message);
        

        Object.setPrototypeOf(this, InvalidRequestError.prototype);
    }

    serializeErrors() {
        return [{
            message: this.message,

        }]
    };
};