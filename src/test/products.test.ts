import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('testando o endpoint /products', () => {
  describe('caso o endpoint /clubs com o metodo getClubs', async () => {
    describe('retorna com sucesso', async () => {

      let chaiHttpResponse: Response;

      it('A aplicação deve ter o endpoint GET `/products` para listar produtos', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .get('/products')
        .then((res) => {
          expect(res.status).to.be.equal(200);
        }) as Response;
      });

      it('A aplicação deve ter o endpoint GET `/products/:id` para listar um produto', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .get('/products')
        .then((res) => {
          expect(res.status).to.be.equal(200);
        }) as Response;
      });

    })
  })
})


