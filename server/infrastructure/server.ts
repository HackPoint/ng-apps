import * as express from 'express';

export abstract class Server {
  public app: express.Application;

  constructor() {
    this.app = express();

    // configure application
    this.config();

    // add routes
    this.routes();

    // add api
    this.api();
  }

  protected abstract config(): void;

  protected abstract routes(): void;

  protected abstract api(): void;
}
