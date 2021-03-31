import { Router } from 'express';

const router = Router();

export default (app: Router) => {
  app.use('/api', router);

  // register Users
  router.get('/items', (req, res, next) => {
    res.status(200).json({message: 'Server is online and in items'});
  });

  // Login Users
  router.post('/login')

};


