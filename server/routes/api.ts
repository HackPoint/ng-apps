import * as express from 'express';
import { Express } from 'express';

const router = express.Router();

class ApiRoutes {
  init(app: Express) {
    app.use('/api', router);
  }
}

export { ApiRoutes };
