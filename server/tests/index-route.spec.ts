import { suite, test } from 'mocha-typescript';
import * as chai from 'chai';
import { Server } from '../infrastructure/server';
import { ApiServer } from '../infrastructure/api-server';

@suite class UserApiTest {
  private apiServer: Server = ApiServer.bootstrap();

  public static before() {
    chai.use(require('chai-http'));
    const expect = chai.expect;
    const should = chai.should();
  }
  public static after() {
    console.log('Shutting down the server!');
  }

  @test('should receive user token v1')
  public shouldGetTheToken() {
    chai.request(this.apiServer.app)
      .get('/api/v1/ping')
      .end((err, res) => {
        console.log('run test');
        res.should.have.status(200);
        res.body.should.have.property('token', 1);
      });
  }
}
