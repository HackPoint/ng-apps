import { NextFunction, Router, Request, Response } from 'express';
import * as path from 'path';
import { logger } from '../infrastructure/utils/logger';


export class IndexApiRoute {
  public static create(router: Router) {
    // log
    logger.info('[IndexRoute::create] Creating index route.');

    // add ping route
    router.get('/v1/ping', (req: Request, res: Response, next: NextFunction) => {
      new IndexApiRoute().ping(req, res, next);
    });

    // add home route
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new IndexApiRoute().index(req, res, next);
    });
  }

  ping(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({'token': 1});
  }

  index(req: Request, res: Response, next: NextFunction) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
}
