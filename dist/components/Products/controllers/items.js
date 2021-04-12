"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailsProduct = exports.searchItems = void 0;
const services_1 = __importDefault(require("../services"));
const searchItems = async (req, res, next) => {
    const { query: { q } } = req;
    const itemsService = new services_1.default();
    try {
        const resultItems = await itemsService.getSearchItems(String(q));
        res.status(200).send(resultItems);
    }
    catch (error) {
        next(error);
    }
};
exports.searchItems = searchItems;
const detailsProduct = async (req, res, next) => {
    const itemsService = new services_1.default();
    const id = req.params.id;
    try {
        const itemDescription = await itemsService.getItemDescription(id);
        res.status(200).send(itemDescription);
    }
    catch (error) {
        next(error);
    }
};
exports.detailsProduct = detailsProduct;
//# sourceMappingURL=items.js.map