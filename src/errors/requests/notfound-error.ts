import { CustomError } from '../base/custom-errors';

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super('NotFoundError');

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: 'Requested route not found' }];
    };
};