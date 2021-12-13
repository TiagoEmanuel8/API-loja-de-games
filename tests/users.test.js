const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('1 - A aplicação deve permitir cadastro de usuários através do endpoint POST `/users`', () => {
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

  it('Será validado que o campo "role" deverá ser "administrator", "seller" ou "client"', async () => {
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
});

describe('3 - A aplicação deve listar os usuários cadastrados através do endpoint GET `/users`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que é possível listar todos os usuários', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: "filipebernardoeduardocosta@gmail.com",
          password: "nOg96hbb05"
        }
      )
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });
    
      await frisby
      .setup({
        request: {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
        .get(`${url}/users`)
        .expect('status', 200)
        .then((responseSales) => {
          const { json } = responseSales;
          const firstUser = json[0];
          const secondUser = json[1];
          const thirdUser = json[2];

          expect(firstUser.name).toBe('Filipe Bernardo Eduardo Costa');
          expect(firstUser.email).toBe('filipebernardoeduardocosta@gmail.com');
          expect(firstUser.cpf).toBe(46360452464);
          expect(firstUser.mobileNumber).toBe(8326447157);
          expect(firstUser.address).toBe('Rua Cruzeiro do Sul');
          expect(firstUser.addressNumber).toBe(871);
          expect(firstUser.district).toBe('Calafate');
          expect(firstUser.city).toBe('Rio Branco');
          expect(firstUser.state).toBe('AC');
          expect(firstUser.country).toBe('BR');
          expect(firstUser.cep).toBe(69914374);
          expect(firstUser.role).toBe('administrator');
        
          expect(secondUser.name).toBe('Regina Stella Barbosa');
          expect(secondUser.email).toBe('reginastellabarbosa_@gmail.com');
          expect(secondUser.cpf).toBe(56318473025);
          expect(secondUser.mobileNumber).toBe(42999439649);
          expect(secondUser.address).toBe('Rua Gameleira');
          expect(secondUser.addressNumber).toBe(544);
          expect(secondUser.district).toBe('Parque Limeira Área VI');
          expect(secondUser.city).toBe('Telêmaco Borba');
          expect(secondUser.state).toBe('PR');
          expect(secondUser.country).toBe('BR');
          expect(secondUser.cep).toBe(84271350);
          expect(secondUser.role).toBe('seller');

          expect(thirdUser.name).toBe('Hadassa Bruna Almada');
          expect(thirdUser.email).toBe('hhadassabrunaalmada@hotmail.com.br');
          expect(thirdUser.cpf).toBe(96470365582);
          expect(thirdUser.mobileNumber).toBe(95994540894);
          expect(thirdUser.address).toBe('Rua Nova Geração');
          expect(thirdUser.addressNumber).toBe(189);
          expect(thirdUser.district).toBe('Kaikan Sul');
          expect(thirdUser.city).toBe('Teixeira de Freitas');
          expect(thirdUser.state).toBe('BA');
          expect(thirdUser.country).toBe('BR');
          expect(thirdUser.cep).toBe(69315325);
          expect(thirdUser.role).toBe('client');
        });
  });

  it('Será validado que não é possível listar usuários sem o token na requisição', async () => {
    await frisby
    .setup({
      request: {
        headers: {
          Authorization: '',
          'Content-Type': 'application/json',
        },
      },
    })
      .get(`${url}/users`)
      .then((response) =>{
        const { json } = response;
        expect(json.message).toBe('Token not found');
      })
  });

  it('Será validado que não é possível listar usuários com o token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'yJhbGciOiJIUzI1NiIsInR5cCI',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/users`)
      .expect('status', 401)
      .then((responseSales) => {
        const { json } = responseSales;
        expect(json.message).toBe('Expired or invalid token');
      });
  });

  it('Será validado que não é possível listar usuários logado como cliente', async () => {
    let result;

    await frisby
      .post(`${url}/login`,
        {
          email: "hhadassabrunaalmada@hotmail.com.br",
          password: "p2GImGgRrE"
        }
      )
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                'Content-Type': 'application/json',
              },
            },
          })
          .get(`${url}/users`)
          .expect('status', 403)
          .then((response) => {
            const { json } = response;
            expect(json.message).toBe('Only admins or sellers can listen users');
          })
      })
  });

});
