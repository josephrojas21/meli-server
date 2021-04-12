"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../api"));
exports.default = async ({ app }) => {
    app.set('port', process.env.PORT || 5000);
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use(morgan_1.default('dev'));
    app.use(cors_1.default());
    app.use(new api_1.default().expose());
};
//# sourceMappingURL=express.js.map