import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';

const shell = require("shelljs");
const { expect } = chai;

chai.use(chaiHttp);


enum TestDescription {
  unauthorizedError = 401,
  success = 200,
  incorrectCredentials = 'Incorrect email or password',
  emptyFields = 'All fields must be filled',
}

describe('Test endpoint POST /login', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });
  describe('caso o endpoint /login com o metodo getLogin', async () => {

    let chaiHttpResponse: Response;

    const loginCorrect = {
      email: "filipebernardoeduardocosta@gmail.com",
      password: "nOg96hbb05"
    }

    const loginIncorrect = {
      email: "filipebernardoeduardocosta@gmail.com",
      password: "nOg96hb05"
    }

    const loginPasswordEmpty = {
      email: "filipebernardoeduardocosta@gmail.com",
      password: ""
    }

    const loginEmailEmpty = {
      email: "",
      password: "nOg96hbb05"
    }

    it('If the "email" is empty, return a message "All fields must be filled" and status 401', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginPasswordEmpty)
      .then((res) => {
        expect(res.status).to.be.equal(TestDescription.unauthorizedError);
        expect(res.body.message).to.be.equal(TestDescription.emptyFields);
      }) as Response;
    });

    it('If the "password" is empty, return a message "All fields must be filled" and status 401', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginEmailEmpty)
      .then((res) => {
        expect(res.status).to.be.equal(TestDescription.unauthorizedError);
        expect(res.body.message).to.be.equal(TestDescription.emptyFields);
      }) as Response;
    });

    it('has wrong credentials, returns an "Incorrect email or password" message and status 401', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginIncorrect)
      .then((res) => {
        expect(res.status).to.be.equal(TestDescription.unauthorizedError);
        expect(res.body.message).to.be.equal(TestDescription.incorrectCredentials);
      }) as Response;
    });

    it('If the credentials are correct, the status 200 and body will be returned.', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginCorrect)
        .then((res) => {
          expect(res.status).to.be.equal(TestDescription.success);
      }) as Response;
    });
  })
})
