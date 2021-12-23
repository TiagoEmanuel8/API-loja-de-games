const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('A aplicação deve permitir cadastro de usuários através do endpoint POST `/users`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
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

  // it('Será validado que o campo `cpf` seja um número', async () => {
  //   await frisby
  //   .post(`${url}/users`,
  //     {
  //       name: 'Heloisa Mariane Louise Caldeira',
  //       email: 'hheloisgmail',
  //       password: 'HBA5e4Qnw',
  //       cpf: "38848318878",
  //       mobile_number: 85994659361,
  //       address: 'Rua São Paulo',
  //       address_number: 665,
  //       district: 'Pajuçara',
  //       city: 'Rio Branco',
  //       state: 'CE',
  //       country: 'BR',
  //       cep: 61932532,
  //       role: 'administrator',
  //     }
  //   )
  //   .expect('status', 400)
  //   .then((response) => {
  //     const { json } = response;
  //     expect(json.message).toBe('fields "cpf", "mobileNumber", "addressNumber", "cep" must be numbers');
  //   });
  // });

  // it('Será validado que o campo `mobileNumber` seja um número', async () => {
  //   await frisby
  //   .post(`${url}/users`,
  //     {
  //       name: 'Heloisa Mariane Louise Caldeira',
  //       email: 'hheloisgmail',
  //       password: 'HBA5e4Qnw',
  //       cpf: 38848318878,
  //       mobile_number: "85994659361",
  //       address: 'Rua São Paulo',
  //       address_number: 665,
  //       district: 'Pajuçara',
  //       city: 'Rio Branco',
  //       state: 'CE',
  //       country: 'BR',
  //       cep: 61932532,
  //       role: 'administrator',
  //     }
  //   )
  //   .expect('status', 400)
  //   .then((response) => {
  //     const { json } = response;
  //     expect(json.message).toBe('fields "cpf", "mobileNumber", "addressNumber", "cep" must be numbers');
  //   });
  // });

  // it('Será validado que o campo `addressNumber` seja um número', async () => {
  //   await frisby
  //   .post(`${url}/users`,
  //     {
  //       name: 'Heloisa Mariane Louise Caldeira',
  //       email: 'hheloisgmail',
  //       password: 'HBA5e4Qnw',
  //       cpf: 38848318878,
  //       mobile_number: 85994659361,
  //       address: 'Rua São Paulo',
  //       address_number: "665",
  //       district: 'Pajuçara',
  //       city: 'Rio Branco',
  //       state: 'CE',
  //       country: 'BR',
  //       cep: 61932532,
  //       role: 'administrator',
  //     }
  //   )
  //   .expect('status', 400)
  //   .then((response) => {
  //     const { json } = response;
  //     expect(json.message).toBe('fields "cpf", "mobileNumber", "addressNumber", "cep" must be numbers');
  //   });
  // });

  // it('Será validado que o campo `cep` seja um número', async () => {
  //   await frisby
  //   .post(`${url}/users`,
  //     {
  //       name: 'Heloisa Mariane Louise Caldeira',
  //       email: 'hheloisgmail',
  //       password: 'HBA5e4Qnw',
  //       cpf: 38848318878,
  //       mobile_number: 85994659361,
  //       address: 'Rua São Paulo',
  //       address_number: 665,
  //       district: 'Pajuçara',
  //       city: 'Rio Branco',
  //       state: 'CE',
  //       country: 'BR',
  //       cep: "61932532",
  //       role: 'administrator',
  //     }
  //   )
  //   .expect('status', 400)
  //   .then((response) => {
  //     const { json } = response;
  //     expect(json.message).toBe('fields "cpf", "mobileNumber", "addressNumber", "cep" must be numbers');
  //   });
  // });

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

describe('A aplicação deve listar os usuários cadastrados através do endpoint GET `/users`', () => {
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

describe('A aplicação deve listar um usuário cadastrado através do endpoint GET `/users/:id`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que é possível listar um usuário específico com sucesso', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: "filipebernardoeduardocosta@gmail.com",
          password: "nOg96hbb05"
        })
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
      .get(`${url}/users/1`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
          expect(result.name).toBe('Filipe Bernardo Eduardo Costa');
          expect(result.email).toBe('filipebernardoeduardocosta@gmail.com');
          expect(result.cpf).toBe(46360452464);
          expect(result.mobileNumber).toBe(8326447157);
          expect(result.address).toBe('Rua Cruzeiro do Sul');
          expect(result.addressNumber).toBe(871);
          expect(result.district).toBe('Calafate');
          expect(result.city).toBe('Rio Branco');
          expect(result.state).toBe('AC');
          expect(result.country).toBe('BR');
          expect(result.cep).toBe(69914374);
          expect(result.role).toBe('administrator');
      });
  });

  it('Será validado que não é possível listar um usuário inexistente', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: "filipebernardoeduardocosta@gmail.com",
          password: "nOg96hbb05"
        })
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
      .get(`${url}/users/999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('User does not exist');
      });
  });
 
  it('Será validado que não é possível listar um usuário sem o token na requisição', async () => {
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

  it('Será validado que não é possível listar um usuário com o token inválido', async () => {
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

  it('Será validado que não é possível listar um usuário logado como cliente', async () => {
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

describe('A aplicação deve permitir edição de dados do usuário através do endpoint PUT `/users/:id`',() => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('será validado que é possível editar um usuário com sucesso', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'hhadassabrunaalmada@hotmail.com.br',
          password: 'p2GImGgRrE'
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
      .put(`${url}/users/3`, {
        name: 'Hadassa Bruna Almada',
        email: 'hhadassabrunaalmada@hotmail.com.br',
        cpf: 96470365582,
        mobile_number: 95994540894,
        address: 'Rua Nova',
        address_number: 189,
        district: 'Kaikan Sul',
        city: 'Teixeira de Freitas',
        state: 'MS',
        country: 'BR',
        cep: 69315325,
      })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('successfully edited user');
      });
  });

  it('Será validado que não é possível listar um usuário inexistente', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: "filipebernardoeduardocosta@gmail.com",
          password: "nOg96hbb05"
        })
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
      .get(`${url}/users/999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('User does not exist');
      });
  });

  it('Será validado que não é possível editar o campo "role"', async () => {
      let token;
      await frisby
        .post(`${url}/login`,
          {
            email: 'hhadassabrunaalmada@hotmail.com.br',
            password: 'p2GImGgRrE'
          })
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
        .put(`${url}/users/3`, {
          name: 'Hadassa Bruna Almada',
          email: 'hhadassabrunaalmada@hotmail.com.br',
          cpf: 96470365582,
          mobile_number: 95994540894,
          address: 'Rua Nova',
          address_number: 189,
          district: 'Kaikan Sul',
          city: 'Teixeira de Freitas',
          state: 'MS',
          country: 'BR',
          cep: 69315325,
          role: 'administrator'
        })
        .expect('status', 400)
        .then((response) => {
          const { json } = response;
          expect(json.message).toBe('Role cannot be edited')
        })
  });

  it('Será validado que não é possível editar um usuário logado com outro usuário', async () => {
    // let token;
    // await frisby
    //   .post(`${url}/login`,
    //     {
    //       email: 'hhadassabrunaalmada@hotmail.com.br',
    //       password: 'p2GImGgRrE'
    //     })
    //   .expect('status', 200)
    //   .then((response) => {
    //     const { body } = response;
    //     const result = JSON.parse(body);
    //     token = result.token;
    //   });

    // await frisby
    //   .setup({
    //     request: {
    //       headers: {
    //         Authorization: token,
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   })
    //   .put(`${url}/users/3`, {
    //     name: 'Hadassa Bruna Almada',
    //     email: 'hhadassabrunaalmada@hotmail.com.br',
    //     cpf: 96470365582,
    //     mobile_number: 95994540894,
    //     address: 'Rua Nova',
    //     address_number: 189,
    //     district: 'Kaikan Sul',
    //     city: 'Teixeira de Freitas',
    //     state: 'MS',
    //     country: 'BR',
    //     cep: 69315325,
    //     role: 'administrator'
    //   })
    //   .expect('status', 400)
    //   .then((response) => {
    //     const { json } = response;
    //     expect(json.message).toBe('Unauthorized user');
    //   });
  });
  
  it('Será validado que não é possível listar um usuário sem o token na requisição', async () => {
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

  it('Será validado que não é possível listar um usuário com o token inválido', async () => {
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

});

describe('A aplicação deve permitir a exclusão de dados do usuário através do endpoint DELETE `/users/:id`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que é possível excluir um usuário com sucesso', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: 'alexandremdc@hotmail.com',
          password: 'EPlZLFixHb',
        })
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
      .delete(`${url}/users/4`)
      .expect('status', 204);
  });

  it('Será validado que não é possível listar um usuário inexistente', async () => {
    let token;
    await frisby
      .post(`${url}/login`,
        {
          email: "filipebernardoeduardocosta@gmail.com",
          password: "nOg96hbb05"
        })
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
      .get(`${url}/users/999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('User does not exist');
      });
  });

  it('Será validado que não é possível editar um usuário logado com outro usuário', async () => {});
  
  it('Será validado que não é possível excluir um usuário sem o token na requisição', async () => {
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

  it('Será validado que não é possível excluir um usuário com o token inválido', async () => {
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
});
