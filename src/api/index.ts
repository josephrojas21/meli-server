import { Router } from 'express';
import itemsRoutes from '../components/Products/routes/items'

class AppRouter {
  private router = Router();
  constructor(
  ) {
      this.config();
  }

  private config() {

    itemsRoutes(this.router)

    this.router.use('/', async (req, res, next) => {
        res.status(200).json({message: 'Server is online and running'});
    });
  }

  expose() {
      return this.router;
  }
}

export default AppRouter;