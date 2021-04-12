"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async ({ app }) => {
    app.use((req, res, next) => {
        let status = 500;
        res.status(status).json({
            message: 'error with the server',
            error: true,
        });
    });
};
//# sourceMappingURL=errorHandler.js.map