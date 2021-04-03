import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';

import ItemsService from '../services';


export const searchItems = async ( req: Request, res: Response, next: NextFunction) => {
    const { query } = req;
    const itemsService = new ItemsService();

    try {
        const resultItems = await itemsService.getSearchItems(String(query));
        res.status(200).send(resultItems);
    } catch (error) {
        next(error);
    }
};

export const detailsProduct = async ( req: Request, res: Response, next: NextFunction) => {
    const itemsService = new ItemsService();
    const id = req.params.id;

    try {
        const itemDescription = await itemsService.getItemDescription(id);
        res.status(200).send(itemDescription);
    } catch (error) {
        next(error);
    }

};