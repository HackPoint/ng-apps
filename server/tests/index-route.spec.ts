import { suite, test } from 'mocha-typescript';
import * as chai from 'chai';
import { BaseTest } from './abstract/base';

@suite class UserApiTest extends BaseTest {

  @test('should receive user token v1')
  public shouldGetTheToken() {
    chai.request(this.apiServer.app)
      .get('/api/v1/ping')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token', 1);
      });
  }
}
