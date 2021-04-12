"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loaders_1 = __importDefault(require("./loaders"));
class App {
    constructor(app = express_1.default()) {
        this.app = app;
        this.config();
    }
    async config() {
        await new loaders_1.default(this.app).config();
    }
}
;
exports.default = new App().app;
//# sourceMappingURL=app.js.map