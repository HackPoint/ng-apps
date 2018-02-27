import { ApiServer } from '../../infrastructure/api-server';
import * as chai from 'chai';
import { Server } from '../../infrastructure/server';

export abstract class BaseTest {
  protected apiServer: Server = ApiServer.bootstrap();

  public static before() {
    chai.use(require('chai-http'));
    const expect = chai.expect;
    const should = chai.should();
  }

  public static after() {
    console.log('Shutting down the server!');
  }
}
