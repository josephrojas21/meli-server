"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_1 = __importDefault(require("../components/Products/routes/items"));
class AppRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        items_1.default(this.router);
        this.router.use('/', async (req, res, next) => {
            res.status(200).json({ message: 'Server is online and running' });
        });
    }
    expose() {
        return this.router;
    }
}
exports.default = AppRouter;
//# sourceMappingURL=index.js.map