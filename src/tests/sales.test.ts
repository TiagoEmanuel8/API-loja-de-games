import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import { mockUsers } from './mocks/mockUsers';
import { mockTokenAdm, mockTockenClient } from './mocks/mockToken';
import { newSale } from './mocks/mockNewSale';
import { Response } from 'superagent';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testing the sales routes', () => {
  describe('Testing the endpoint GET /sales', () => {
    let chaiHttpResponse: Response; 

    it('The application must have the endpoint GET /sales to list sales', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales')
      .set('authorization', mockTokenAdm)
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });

    it('Only users of type "adm" or "sellers" can access the endpoint GET /sales', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/users')
      .set('authorization', mockTockenClient)
      .send('Only admins or sellers can listen sales')
      .then((res) => {
        expect(res.status).to.be.equal(403);
      }) as Response;
    });

    it('It is an array of objects', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales')
      .set('authorization', mockTokenAdm)
      .send(mockUsers)
      .then((res) => {
        expect(res.body).to.be.a('array') && expect(res.body[0]).to.be.a('object');
      }) as Response;
    });

    it('The application must have the GET endpoint /sales/:id to list a user', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales/1')
      .set('authorization', mockTokenAdm)
      .send(mockUsers[0])
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });

    it('If the user does not exist, an error should be returned.', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales/999')
      .set('authorization', mockTokenAdm)
      .then((res) => {
        expect(res.status).to.be.equal(404);
      }) as Response;
    });
  });

  describe('Testing the endpoint POST /sales', () => {
    let chaiHttpResponse: Response; 
      it('The sale is successfully registered', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .post('/sales')
        .send(newUser)
        .then((res) => {
          expect(res.status).to.be.equal(200);
        }) as Response;
      });
  });

  describe('Testing the endpoint PATCH /sales', () => {
    let chaiHttpResponse: Response; 
      it('The application must have the PATCH endpoint /users/:id to edit a user', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .patch('/sales/3')
        .set('authorization', mockTockenClient)
        .then((res) => {
          expect(res.status).to.be.equal(200);
        }) as Response;
      });
  });

  describe('Testing the endpoint DELETE /sales', () => {
    let chaiHttpResponse: Response; 
      it('The application must have the DELETE endpoint /sales/:id to delete a sales', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .delete('/sales/3')
        .set('authorization', mockTokenAdm)
        .then((res) => {
          expect(res.status).to.be.equal(204);
        }) as Response;
      });
  });
});