import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');
import { Server } from './server';
import { IndexApiRoute } from '../routes/index';
import { logger } from './utils/logger';

export class ApiServer extends Server {
  public static bootstrap(): Server {
    return new ApiServer();
  }

  constructor() {
    super();
  }

  protected config(): void {
    dotenv.config({path: '.env'});

    // setup port
    this.app.set('port', (process.env.PORT || 3000));

    // expose static files
    this.app.use('/', express.static(path.join(__dirname, '../public')));

    // mount logger
    // this.app.use(require('morgan')({'stream': logger.info}));

    // mount json form parser
    this.app.use(bodyParser.json());

    // mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // mount cookie parker
    this.app.use(cookieParser('SECRET_GOES_HERE'));

    // mount override
    this.app.use(methodOverride());

    // catch 404 and forward to error handler
    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      err.status = 404;
      next(err);
    });

    // handle CORS
    this.app.use(cors());

    // error handling
    this.app.use(errorHandler());
  }

  protected routes(): void {
    let router: express.Router;
    router = express.Router();

    // IndexRoute
    IndexApiRoute.create(router);

    // use router middleware
    this.app.use('/', router);
  }

  protected api() {
    let router: express.Router;
    router = express.Router();

    // IndexRoute
    IndexApiRoute.create(router);

    // use router middleware
    this.app.use('/api', router);
  }
}


