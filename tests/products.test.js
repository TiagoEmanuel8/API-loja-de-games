const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('7 - Será validado que é possível cadastrar um produto com sucesso', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:drop');
    shell.exec('npx sequelize db:create && npx sequelize db:migrate');
  });
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
