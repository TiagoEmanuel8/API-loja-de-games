const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('7 - A aplicação deve ter o endpoint POST `/products` para cadastrar produtos', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });

  it('Será validado que é possível cadastrar um produto com sucesso', async () => {});

  it('Será validado que o campo `name` não esteja vazio', async () => {});

  it('Será validado que o campo `type` não esteja vazio', async () => {});

  it('Será validado que o campo `price` não esteja vazio', async () => {});

  it('Será validado que o campo `price` seja um número', async () => {});

  it('Será validado que o campo `url_image` não esteja vazio', async () => {});

  it('Será validado que não é possível cadastrar produtos sem o token na requisição', async () => {});
  
  it('Será validado que não é possível listar usuários com o token inválido', async () => {});

  it('Será validado que não é possível listar usuários logado como cliente', async () => {});

});

describe('8 - Será validado que é possível listar todos os produtos com sucesso', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });
});

describe('9 - Será validado que é possível listar um produto com sucesso', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });
});

describe('10 - Será validado que é possível listar um produto por parâmetros com sucesso', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });
});

describe('11 - Será validado que é possível editar um produto com sucesso', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });
});

describe('12 - Será validado que é possível deletar um produto com sucesso', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });
});
