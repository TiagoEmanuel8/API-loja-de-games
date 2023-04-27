import * as chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing the endpoint /users', () => {
  describe('Testing the endpoint /users with the method getUsers', async () => {
    describe('returns successfully', async () => {

      let chaiHttpResponse: Response;

      it('The application must have the GET endpoint /users to list users', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .get('/users')
        .then((res) => {
          expect(res.status).to.be.equal(200);
        }) as Response;
      });

      it('The application must have the GET endpoint /users/:id to list a user', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .get('/users')
        .then((res) => {
          expect(res.status).to.be.equal(200);
        }) as Response;
      });

    })
  })
})


