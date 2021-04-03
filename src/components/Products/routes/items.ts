import { Router } from 'express';
import { query } from 'express-validator';

import { searchItems, detailsProduct } from '../controllers/items';

const router = Router();

export default (app: Router) => {
  app.use('/api', router);

  // register Users
  router.get('/items', [
    query('q').trim(),
  ], searchItems);

  // Login Users
  router.get('/items/:id', detailsProduct);

};


