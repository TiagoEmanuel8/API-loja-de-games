import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('testando o endpoint /users', () => {
  describe('testando o endpoint /users com o metodo getUsers', async () => {
    describe('retorna com sucesso', async () => {

      let chaiHttpResponse: Response;

      it('A aplicação deve ter o endpoint GET `/users` para listar usuarios', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .get('/users')
        .then((res) => {
          expect(res.status).to.be.equal(200);
        }) as Response;
      });

      it('A aplicação deve ter o endpoint GET `/users/:id` para listar um usuario', async () => {
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


