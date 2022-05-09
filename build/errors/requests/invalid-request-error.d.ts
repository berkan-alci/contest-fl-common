import { CustomError } from '../base/custom-errors';
export declare class InvalidRequestError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeErrors(): {
        message: string;
    }[];
}
