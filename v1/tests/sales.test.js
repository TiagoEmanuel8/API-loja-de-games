const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

// só montei o esqueleto dos testes
describe('A aplicação deve permitir cadastro de venda através do endpoint POST `/sales`', () => {
  
  it('Será validado que é possível cadastrar uma venda com sucesso', async () => {});

  it('Será validado que não é possível cadastrar uma venda com sucesso com id de usuário inexistente', async () => {});

});

describe('A aplicação deve permitir listar todas as vendas através do endpoint GET `/sales`', () => {
  
  it('Será validado que é possível listar todas as vendas com sucesso', async () => {});

});

describe('A aplicação deve permitir listar uma venda através do endpoint GET `/sales`', () => {
  
  it('Será validado que é possível listar uma venda com sucesso', async () => {});

  it('Será validado que não é possível listar uma venda com id inválido', async () => {});

});