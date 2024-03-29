import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import { mockUsers } from './mocks/mockUsers';
import { mockTokenAdm, mockTockenClient } from './mocks/mockToken';
import { newUser, userRepeatEmail, userInvalidEmail, userInvalidPassword } from './mocks/mockNewUser'
import { Response } from 'superagent';

const shell = require("shelljs");
const { expect } = chai;

chai.use(chaiHttp);

describe('Testing the users routes', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  describe('Testing the endpoint GET /users', () => {
    let chaiHttpResponse: Response; 

    it('The application must have the endpoint GET /users to list users', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/users')
      .set('authorization', mockTokenAdm)
      .send(mockUsers)
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });

    it('Only users of type "adm" or "sellers" can access the endpoint GET /users', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/users')
      .set('authorization', mockTockenClient)
      .send('Only admins or sellers can listen users')
      .then((res) => {
        expect(res.status).to.be.equal(403);
      }) as Response;
    });

    it('It is an array of objects', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/users')
      .set('authorization', mockTokenAdm)
      .send(mockUsers)
      .then((res) => {
        expect(res.body).to.be.a('array') && expect(res.body[0]).to.be.a('object');
      }) as Response;
    });

    it('It is an array of objects with the properties "id", "name", "email", "cpf", "mobileNumber", "address", "addressNumber", "district", "city", "state", "country", "cep", and "role".', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/users')
      .set('authorization', mockTokenAdm)
      .send(mockUsers)
      .then((res) => {
        expect(res.body).to.be.a('array')
        expect(res.body[0]).to.be.a('object');
        expect(res.body[0]).to.have.property('id')
        expect(res.body[0]).to.have.property('name')
        expect(res.body[0]).to.have.property('email')
        expect(res.body[0]).to.have.property('cpf')
        expect(res.body[0]).to.have.property('mobileNumber')
        expect(res.body[0]).to.have.property('address')
        expect(res.body[0]).to.have.property('addressNumber')
        expect(res.body[0]).to.have.property('district')
        expect(res.body[0]).to.have.property('city')
        expect(res.body[0]).to.have.property('state')
        expect(res.body[0]).to.have.property('country')
        expect(res.body[0]).to.have.property('cep')
        expect(res.body[0]).to.have.property('role')
      }) as Response;
    });

    it('The application must have the GET endpoint /users/:id to list a user', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/users/1')
      .set('authorization', mockTokenAdm)
      .send(mockUsers[0])
      .then((res) => {
        expect(res.status).to.be.equal(200);
      }) as Response;
    });

    it('If the user does not exist, an error should be returned.', async () => {
    // implementar testes
  });

  describe('Testing the endpoint POST /users', () => {
    let chaiHttpResponse: Response; 
      it('The user is successfully registered', async () => {
      });

      it('It is not possible to register a user with a repeated email', async () => {
      });

      it('The password must contain between 6 and 10 characters.', async () => {
      });

      it('The email must be in the format user@email.com.', async () => {
      });
    });
  })
  describe('Testing the endpoint PATCH /users', () => {
    let chaiHttpResponse: Response; 
      it('The application must have the PATCH endpoint /users/:id to edit a user', async () => {
      });
  });

  describe('Testing the endpoint DELETE /users', () => {      
      it('If the user does not exist, an error should be returned.', async () => {
      });
  });
})
