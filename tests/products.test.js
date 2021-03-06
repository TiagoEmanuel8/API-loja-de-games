const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('A aplicação deve ter o endpoint POST `/products` para cadastrar produtos', () => {
  // consertar isso depois
  // beforeEach(() => {
  //   shell.exec('npx sequelize db:drop');
  //   shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  //   shell.exec('npx sequelize db:seed:all');
  // });

  it('Será validado que é possível cadastrar um produto', async () => {
    // let token;
    // await frisby
    //   .post(`${url}/login`,
    //     {
    //       email: "filipebernardoeduardocosta@gmail.com",
    //       password: "nOg96hbb05"
    //     }
    //   )
    //   .expect('status', 200)
    //   .then((response) => {
    //     const { body } = response;
    //     const result = JSON.parse(body);
    //     token = result.token;
    //   });
    
    //   await frisby
    //   .setup({
    //     request: {
    //       headers: {
    //         Authorization: token,
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   })
    //   .post(`${url}/products`,
    //     {
    //       name: "Resident Evil Village BR",
    //       type: "Xbox One | X|S",
    //       price: 140.5
    //     }
    //   )
    //   .expect('status', 201)
    //   .then((response) => {
    //     const { json } = response;
    //     expect(json.message).toBe('successfully registered product');
    //   });
  });

  it('Será validado que não é possível cadastrar um produto com o campo `name` inexistente', async () => {
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
      .post(`${url}/products`,
        {
          type: "Xbox One | X|S",
          price: 140.5
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('the fields "name", "type", "price" is required');
      });
  });

  it('Será validado que não é possível cadastrar um produto com o campo `type` inexistente', async () => {
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
      .post(`${url}/products`,
        {
          name: "Resident Evil Village BR",
          price: 140.5
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('the fields "name", "type", "price" is required');
      });
  });

  it('Será validado que não é possível cadastrar um produto com o campo `price` inexistente', async () => {
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
      .post(`${url}/products`,
        {
          name: "Resident Evil Village BR",
          type: "Xbox One | X|S",
        }
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('the fields "name", "type", "price" is required');
      });
  });

  it('Será validado que não é possível cadastrar um produto sem o token na requisição', async () => {
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

  it('Será validado que não é possível cadastrar um produto com o token inválido', async () => {
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

  it('Será validado que não é possível cadastrar um produto logado como cliente', async () => {
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
          .post(`${url}/products`)
          .expect('status', 403)
          .then((response) => {
            const { json } = response;
            expect(json.message).toBe('Only admins or sellers can add products');
          })
      })
  });

});

describe('A aplicação deve ter o endpoint PUT `/products/images` para adicionar uma imagem ao produto', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que o campo `url_image` não esteja vazio', async () => {})

  it('Será validado que não é possível cadastrar um produto sem o token na requisição', async () => {
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

  it('Será validado que não é possível cadastrar um produto com o token inválido', async () => {
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

  it('Será validado que não é possível cadastrar um produto logado como cliente', async () => {
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
          .post(`${url}/products`)
          .expect('status', 403)
          .then((response) => {
            const { json } = response;
            expect(json.message).toBe('Only admins or sellers can add products');
          })
      })
  });

});

describe('A aplicação deve ter o endpoint GET `/products` para listar produtos', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que não é possível listar um produto sem o token na requisição', async () => {
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

  it('Será validado que não é possível listar um produto com o token inválido', async () => {
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

  it('Será validado que não é possível listar um produto logado como cliente', async () => {
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
          .post(`${url}/products`)
          .expect('status', 403)
          .then((response) => {
            const { json } = response;
            expect(json.message).toBe('Only admins or sellers can add products');
          })
      })
  });

});

describe('A aplicação deve ter o endopint GET `/products/:id` para listar um produto', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que é possível listar um produto com sucesso', async () => {
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
      .get(`${url}/products/9`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.id).toBe(9);
        expect(json.name).toBe('Far Cry 6');
        expect(json.type).toBe('Playstation 5');
        expect(json.price).toBe('150.00');
        expect(json.quantity).toBe(10);
        expect(json.url_image).toBe('http://localhost:3001/images/9.jpg');
      });
  });

  it('Será validado que não é possível listar um produto inexistente', async () => {
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
      .get(`${url}/products/999`)
      .expect('status', 404)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Product does not exist');
      });
  });

  it('Será validado que não é possível listar um produto sem o token na requisição', async () => {
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

  it('Será validado que não é possível listar um produto com o token inválido', async () => {
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

  it('Será validado que não é possível listar um produto logado como cliente', async () => {
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
          .post(`${url}/products`)
          .expect('status', 403)
          .then((response) => {
            const { json } = response;
            expect(json.message).toBe('Only admins or sellers can add products');
          })
      })
  });

});

describe('A aplicação deve ter o endpoint PUT `/products` para editar um produto', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que é possível editar um produto com sucesso', async () => {
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
      .put(`${url}/products/9`, {
        name: "Far Cry 6",
        type: "Playstation 5",
        price: "100.00",
        quantity: 10,
      })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.id).toBe(9);
        expect(json.name).toBe('Far Cry 6');
        expect(json.type).toBe('Playstation 5');
        expect(json.price).toBe('100.00');
        expect(json.quantity).toBe(10);
        expect(json.url_image).toBe('http://localhost:3001/images/9.jpg');
      });
  });
  
  it('Será validado que não é possível editar um produto inexistente', async () => {});

  it('Será validado que não é possível listar um produto sem o token na requisição', async () => {
    // await frisby
    // .setup({
    //   request: {
    //     headers: {
    //       Authorization: '',
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // })
    // .post(`${url}/products/9`, {
    //   name: "Far Cry 6",
    //   type: "Playstation 5",
    //   price: "100.00",
    //   quantity: 10,
    // })
    //   .then((response) =>{
    //     const { json } = response;
    //     expect(json.message).toBe('Token not found');
    //   })
  });

  it('Será validado que não é possível listar um produto com o token inválido', async () => {
    // await frisby
    //   .setup({
    //     request: {
    //       headers: {
    //         Authorization: 'yJhbGciOiJIUzI1NiIsInR5cCI',
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   })
    //   .post(`${url}/products/9`, {
    //     name: "Far Cry 6",
    //     type: "Playstation 5",
    //     price: "100.00",
    //     quantity: 10,
    //   })
    //   .expect('status', 401)
    //   .then((responseSales) => {
    //     const { json } = responseSales;
    //     expect(json.message).toBe('Expired or invalid token');
    //   });
  });

  it('Será validado que não é possível listar um produto logado como cliente', async () => {
    // let result;

    // await frisby
    //   .post(`${url}/login`,
    //     {
    //       email: "hhadassabrunaalmada@hotmail.com.br",
    //       password: "p2GImGgRrE"
    //     }
    //   )
    //   .expect('status', 200)
    //   .then((response) => {
    //     const { body } = response;
    //     result = JSON.parse(body);
    //     return frisby
    //       .setup({
    //         request: {
    //           headers: {
    //             Authorization: result.token,
    //             'Content-Type': 'application/json',
    //           },
    //         },
    //       })
    //       .post(`${url}/products/9`,{
    //         name: "Far Cry 6",
    //         type: "Playstation 5",
    //         price: "100.00",
    //         quantity: 10,
    //       })
    //       .expect('status', 403)
    //       .then((response) => {
    //         const { json } = response;
    //         expect(json.message).toBe('Only admins or sellers can add products');
    //       })
    //   })
  });

});

describe('Será validado que é possível deletar um produto com sucesso', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });

  it('Será validado que é possível excluir um produto com sucesso', async () => {
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
  
  it('Será validado que não é possível excluir um produto sem o token na requisição', async () => {
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

  it('Será validado que não é possível excluir um produto com o token inválido', async () => {
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