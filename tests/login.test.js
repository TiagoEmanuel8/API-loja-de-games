const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('A aplicação deve ter o endpoind POST `/login`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que é possível fazer login de um usuário com sucesso', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'filipebernardoeduardocosta@gmail.com',
          password: 'nOg96hbb05'
        }
      )
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.token).not.toBeNull();
      })
  });

  it('Será validado que não é possível fazer login sem o campo `email`', async () => {
    await frisby
      .post(`${url}/login`,
        {
          password: 'nOg96hbb05'
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('fields "email" and "password" are required');
      })
  });
  
  it('Será validado que não é possível fazer login sem o campo `password`', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'filipebernardoeduardocosta@gmail.com',
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('fields "email" and "password" are required');
      })
  });
  
  it('Será validado que não é possível fazer login com uma senha inválida', async () => {
    await frisby
      .post(`${url}/login`,
        {
          email: 'filipebernardoeduardocosta@gmail.com',
          password: 'abcde12345'
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('invalid "email" or "password"');
      })
  });
});