"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const errorHandler_1 = __importDefault(require("./errorHandler"));
class Loader {
    constructor(app) {
        this.app = app;
    }
    async config() {
        await express_1.default({ app: this.app });
        console.log(`Express loader succeeded`);
        await errorHandler_1.default({ app: this.app });
        console.log(`Error Handler loader succeeded`);
    }
}
exports.default = Loader;
//# sourceMappingURL=index.js.map