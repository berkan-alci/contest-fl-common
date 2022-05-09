"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const authorization_error_1 = require("../../errors/auth/authorization-error");
const requireAuth = (req, res, next) => {
    if (!req.currentUser) {
        throw new authorization_error_1.AuthorizationError();
    }
    next();
};
exports.requireAuth = requireAuth;
