"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_emoji_1 = __importDefault(require("node-emoji"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
function main() {
    app_1.default.listen(app_1.default.get('port') || 500);
    console.log(`${node_emoji_1.default.get('coffee')} Server running on port ${app_1.default.get('port')}`);
}
;
main();
//# sourceMappingURL=index.js.map