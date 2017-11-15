import * as express from 'express';
import { Express } from 'express';


class ApiRoutes {
  init(app: Express) {
    const router = express.Router();
    router.route('/users').get((req, res) => {
      res.status(200).json({ token: { 'token': '1' } });
    });
    app.use('/api', router);
  }
}

export { ApiRoutes };
