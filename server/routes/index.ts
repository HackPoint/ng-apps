import { NextFunction, Router, Request, Response } from 'express';
import * as path from 'path';

export class IndexApiRoute {
  public static create(router: Router) {
    // log
    console.log('[IndexRoute::create] Creating index route.');

    // add ping route
    router.get('/ping', (req: Request, res: Response, next: NextFunction) => {
      new IndexApiRoute().ping(req, res, next);
    });

    // add home route
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new IndexApiRoute().index(req, res, next);
    });
  }

  public ping(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({'token': 1});
  }

  public index(req: Request, res: Response, next: NextFunction) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
}
