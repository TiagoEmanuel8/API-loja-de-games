// import * as chai from 'chai';
// import chaiHttp from 'chai-http';
// import { app } from '../app';
// import { Response } from 'superagent';
// import { Token } from '../helpers/createTokenJWT';

// chai.use(chaiHttp);

// const { expect } = chai;

// enum TestDescription {
//   unauthorizedError = 401,
//   success = 200,
//   incorrectCredentials = 'Incorrect email or password',
//   emptyFields = 'All fields must be filled',
// }

// describe('Testa endpoint /login', () => {
//   describe('caso o endpoint /login com o metodo getLogin', async () => {

//     let chaiHttpResponse: Response;

//     const loginCorrect = {
//       email: "filipebernardoeduardocosta@gmail.com",
//       password: "nOg96hbb05"
//     }

//     const loginIncorrect = {
//       email: "filipebernardoeduardocosta@gmail.com",
//       password: "nOg96hb"
//     }

//     const loginPasswordEmpty = {
//       email: "filipebernardoeduardocosta@gmail.com"
//     }

//     const loginEmailEmpty = {
//       password: "nOg96hbb05"
//     }

//     it('has wrong credentials, returns an "Incorrect email or password" message and status 401', async () => {
//       chaiHttpResponse = await chai
//       .request(app)
//       .post('/login')
//       .send(loginIncorrect)
//       .then((res) => {
//         expect(res.status).to.be.equal(TestDescription.unauthorizedError);
//         expect(res.body.message).to.be.equal(TestDescription.incorrectCredentials);
//       }) as Response;
//     });

//     it('If the "email" is empty, return a message "All fields must be filled" and status 401', async () => {
//       chaiHttpResponse = await chai
//       .request(app)
//       .post('/login')
//       .send(loginPasswordEmpty)
//       .then((res) => {
//         expect(res.status).to.be.equal(TestDescription.unauthorizedError);
//         expect(res.body.message).to.be.equal(TestDescription.emptyFields);
//       }) as Response;
//     });

//     it('If the "password" is empty, return a message "All fields must be filled" and status 401', async () => {
//       chaiHttpResponse = await chai
//       .request(app)
//       .post('/login')
//       .send(loginEmailEmpty)
//       .then((res) => {
//         expect(res.status).to.be.equal(TestDescription.unauthorizedError);
//         expect(res.body.message).to.be.equal(TestDescription.emptyFields);
//       }) as Response;
//     });

//   describe('If the getLogin method returns successfully', async () => {
//     it('The response is 200', async () => {
//       chaiHttpResponse = await chai
//         .request(app)
//         .post('/login')
//         .send(loginCorrect)
//         .then((res) => {
//           expect(res.status).to.be.equal(TestDescription.success);
//           expect(res.body).not.to.be.empty;
//           expect(res.body).to.be.an('object');
//       }) as Response;
//     });

//     it('It is a non-empty object', async () => {
//       chaiHttpResponse = await chai
//         .request(app)
//         .post('/login')
//         .send(loginCorrect)
//         .then((res) => {
//           expect(res.body).not.to.be.empty;
//           expect(res.body).to.be.an('object');
//       }) as Response;
//     });

//     it('It is an object', async () => {
//       chaiHttpResponse = await chai
//         .request(app)
//         .post('/login')
//         .send(loginCorrect)
//         .then((res) => {
//           expect(res.body).to.be.an('object');
//       }) as Response;
//     });

//     it('It is a user object where it has "id, name, role, and email"', async () => {
//       chaiHttpResponse = await chai
//         .request(app)
//         .post('/login')
//         .send(loginCorrect)
//         .then((res) => {
//           expect(res.body.user).to.have.property('id') && expect(res.body.user).to.have.property('username') && expect(res.body.user).to.have.property('role') && expect(res.body.user).to.have.property('email');
//       }) as Response;
//     });

//     it('It is a user object where "id" is a number, "username", "role", and "email" are strings.', async () => {
//       chaiHttpResponse = await chai
//         .request(app)
//         .post('/login')
//         .send(loginCorrect)
//         .then((res) => {
//           expect(res.body.user.id).to.have.a('number') && expect(res.body.user.username).to.have.a('string') && expect(res.body.user.role).to.have.a('string') && expect(res.body.user.email).to.have.a('string');
//       }) as Response;
//     });

//       it('There are the properties "user" and "token"', async () => {
//         chaiHttpResponse = await chai
//           .request(app)
//           .post('/login')
//           .send(loginCorrect)
//           .then((res) => {
//             expect(res.body).to.have.property('user') && expect(res.body).to.have.property('token');
//         }) as Response;
//       });

//         it('The user is an object', async () => {
//           chaiHttpResponse = await chai
//             .request(app)
//             .post('/login')
//             .send(loginCorrect)
//             .then((res) => {
//               expect(res.body.user).to.be.a('object');
//           }) as Response;
//         });

//         it('The token is a string', async () => {
//           chaiHttpResponse = await chai
//             .request(app)
//             .post('/login')
//             .send(loginCorrect)
//             .then((res) => {
//               expect(res.body.token).to.be.a('string');
//           }) as Response;
//         });
//     });
//   })
// })

// describe('Test the endpoint /login/validate', () => {
//   describe('If the getUser method returns successfully', async () => {
//     let chaiHttpResponse: Response;

//     const loginCorrect = {
//       email: "admin@admin.com",
//       password: "secret_admin"
//     }

//     it('return response 200 and the role "admin"', async () => {
//       chaiHttpResponse = await chai
//         .request(app)
//         .post('/login')
//         .send(loginCorrect)
//       const token = chaiHttpResponse.body.token;
//       const role = chaiHttpResponse.body.user.role;

//       chaiHttpResponse = await chai.request(app)
//         .get('/login/validate')
//         .set('authorization', token)
//         .then((res) => {
//           expect(res.status).to.be.equal(200);
//           expect(res.body).to.be.equal(role);
//       }) as Response;
//     });
//   })
// })