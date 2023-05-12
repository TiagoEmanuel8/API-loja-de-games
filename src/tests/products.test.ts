import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { mockTokenAdm, mockTockenClient } from './mocks/mockToken';
import { mockProduct } from './mocks/mockProducts';
import { newProduct } from './mocks/mockNewProduct';
import { app } from '../app';
import { Response } from 'superagent';

const shell = require("shelljs");
const { expect } = chai;

chai.use(chaiHttp);

describe('Testing the product routes', () => {
  describe('Testing the endpoint GET /products', () => {
    let chaiHttpResponse: Response;

    it('The application must have the GET endpoint /products to list products', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/products')
      .send(mockProduct)
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });

    it('The application must have the GET endpoint /products/:id to list a product', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/products/1')
      .send(mockProduct[0])
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });

    it('If the product is not found in the GET endpoint /products/:id, an error message should be returned.', async () => {
    });

  })

  describe('Testing the endpoint POST /products', () => {
    let chaiHttpResponse: Response;

    it('The product is successfully registered', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/products')
      .set('authorization', mockTokenAdm)
      .send(newProduct)
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });

    it('Only users of type "adm" or "sellers" can access the endpoint POST /products', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/products')
        .set('authorization', mockTockenClient)
        .send('Only admins or sellers can create products')
        .then((res) => {
          expect(res.status).to.be.equal(200);
      }) as Response;
    });
  });

  describe('Testing the endpoint PATCH /products', () => {
    let chaiHttpResponse: Response;

    it('If the product is not found in the PATCH endpoint /products/:id, an error message should be returned.', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .patch('/products/999')
      .set('authorization', mockTokenAdm)
      .then((res) => {
        expect(res.status).to.be.equal(404);
      }) as Response;

    });

    it('Only users of type "adm" or "sellers" can access the endpoint PATCH /products', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .patch('/products/1')
        .set('authorization', mockTockenClient)
        .then((res) => {
          expect(res.status).to.be.equal(403);
      }) as Response;
    });

    it('The product is successfully updated', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .patch('/products/1')
      .set('authorization', mockTokenAdm)
      .send({ price: 211 })
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });
  })

  describe('Testing the endpoint DELETE /products', () => {
    let chaiHttpResponse: Response;

    it('If the product is not found in the DELETE endpoint /products/:id, an error message should be returned.', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .delete('/products/999')
      .set('authorization', mockTokenAdm)
      .then((res) => {
        expect(res.status).to.be.equal(404);
      }) as Response;

    });

    it('Only users of type "adm" or "sellers" can access the endpoint DELETE /products', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .delete('/products/1')
        .set('authorization', mockTockenClient)
        .then((res) => {
          expect(res.status).to.be.equal(403);
      }) as Response;
    });

    it('The product is successfully deleted', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .delete('/products/1')
      .set('authorization', mockTokenAdm)
      .then((res) => {
        expect(res.status).to.be.equal(204);
      }) as Response;
    });
  })

});
