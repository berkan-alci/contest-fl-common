import { CustomError } from '../base/custom-errors';
export declare class AuthorizationError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
