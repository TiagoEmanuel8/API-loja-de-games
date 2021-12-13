const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('1 - A aplicação deve ter o endpoind POST`/users`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });

  it('Será validado que é possível cadastrar um usuário com sucesso', async () => {
    await frisby
      .post(`${url}/users`,
        {
          name: 'Heloisa Mariane Louise Caldeira',
          email: 'hheloisaMLC@gmail.com',
          password: 'HBA5e4Qnw',
          cpf: 38848318878,
          mobile_number: 85994659361,
          address: 'Rua São Paulo',
          address_number: 665,
          district: 'Pajuçara',
          city: 'Rio Branco',
          state: 'CE',
          country: 'BR',
          cep: 61932532,
          role: 'administrator',
        }
      )
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('successfully registered user');
      });
  });

  it('Será validado que os campos "email", "password" e "cpf" devem estar presentes na requisição', async () => {
    await frisby
      .post(`${url}/users`,
        {
          name: 'Heloisa Mariane Louise Caldeira',
          mobile_number: 85994659361,
          address: 'Rua São Paulo',
          address_number: 665,
          district: 'Pajuçara',
          city: 'Rio Branco',
          state: 'CE',
          country: 'BR',
          cep: 61932532,
          role: 'administrator',
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('the fields "name", "email", "password", "cpf", "address", "district", "city", "state", "country" and "cep" are required.')
      })
  });

  it('Será validado que a senha deve conter entre 6 e 10 caracteres', async () => {
    await frisby
      .post(`${url}/users`,
        {
          name: 'Heloisa Mariane Louise Caldeira',
            email: 'hheloisaMLC@gmail.com',
            password: 'HBA5e4QnwJ4gd.',
            cpf: 38848318878,
            mobile_number: 85994659361,
            address: 'Rua São Paulo',
            address_number: 665,
            district: 'Pajuçara',
            city: 'Rio Branco',
            state: 'CE',
            country: 'BR',
            cep: 61932532,
            role: 'administrator',
        }
      )
      .expect('status', 409)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('password must contain between 6 and 10 characters')
      })
  });

  it('Será validado que o email está no formato correto', async () => {
    await frisby
    .post(`${url}/users`,
      {
        name: 'Heloisa Mariane Louise Caldeira',
        email: 'hheloisgmail',
        password: 'HBA5e4Qnw',
        cpf: 38848318878,
        mobile_number: 85994659361,
        address: 'Rua São Paulo',
        address_number: 665,
        district: 'Pajuçara',
        city: 'Rio Branco',
        state: 'CE',
        country: 'BR',
        cep: 61932532,
        role: 'administrator',
      }
    )
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).toBe('"email" must be a valid email');
    });
  });

  it('Será validado que o campo "role" deverá ser "administrator", "seller" or "client"', async () => {
    await frisby
      .post(`${url}/users`,
        {
          name: 'Heloisa Mariane Louise Caldeira',
          email: 'hheloisaMLC@gmail.com',
          password: 'HBA5e4Qnw',
          cpf: 38848318878,
          mobile_number: 85994659361,
          address: 'Rua São Paulo',
          address_number: 665,
          district: 'Pajuçara',
          city: 'Rio Branco',
          state: 'CE',
          country: 'BR',
          cep: 61932532,
          role: 'xablau',
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('the role field must be administrator, seller or client');
    });
  });
})