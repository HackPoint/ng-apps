import { suite, test } from 'mocha-typescript';
import * as chai from 'chai';
import {app, server} from '../app';

@suite class UserApiTest {
  public static before() {
    chai.use(require('chai-http'));
    let expect = chai.expect;
    let should = chai.should();
  }
  public static after() {
    console.log('Shutting down the server!');
    server.close();
  }
  @test('should receive user token')
  public shouldGetTheToken() {
    chai.request(app)
      .get('/api/users')
      .end((err, res) => {
        console.log('run test');
        res.should.have.status(200);
        res.body.should.have.property('token', 1);
      });
  }
}
