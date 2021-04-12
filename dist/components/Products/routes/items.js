"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const items_1 = require("../controllers/items");
const router = express_1.Router();
exports.default = (app) => {
    app.use('/api', router);
    // register Users
    router.get('/items', [
        express_validator_1.query('q').trim(),
    ], items_1.searchItems);
    // Login Users
    router.get('/items/:id', items_1.detailsProduct);
};
//# sourceMappingURL=items.js.map