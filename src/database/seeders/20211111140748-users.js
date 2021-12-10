// https://www.4devs.com.br/gerador_de_pessoas 
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkInsert('users',
    [{
      id: 1,
      name: 'Filipe Bernardo Eduardo Costa',
      email: 'filipebernardoeduardocosta@gmail.com',
      password: '$2a$10$u0FzQuq1dId4Sd2L0B03FOwR7YyPi7FB0mJPsn1ELhEcS7o8l81JC', //senha: nOg96hbb05
      cpf: 46360452464,
      mobile_number: 8326447157,
      address: 'Rua Cruzeiro do Sul',
      address_number: 871,
      district: 'Calafate',
      city: 'Rio Branco',
      state: 'AC',
      country: 'BR',
      cep: 69914374,
      role: 'administrator',
    },
    {
      id: 2,
      name: 'Regina Stella Barbosa',
      email: 'reginastellabarbosa_@gmail.com',
      password: '$2a$10$gzJJXz9uIk0zCFR7tTLODO/QfMhq5LJTU0JqPQkDX/UeJx9CtkT9W', //senha: p9iBFXc3wf
      cpf: 56318473025,
      mobile_number: 42999439649,
      address: 'Rua Gameleira',
      address_number: 544,
      district: 'Parque Limeira Área VI',
      city: 'Telêmaco Borba',
      state: 'PR',
      country: 'BR',
      cep: 84271350,
      role: 'seller',
    },
    {
      id: 3,
      name: 'Hadassa Bruna Almada',
      email: 'hhadassabrunaalmada@hotmail.com.br',
      password: '$2a$10$rr/BHbkMVB6lnfKE4SqgZODGNwoWQo6g43sC/MFni7Z7c.h5oMT4S', //senha: p2GImGgRrE
      cpf: 96470365582,
      mobile_number: 95994540894,
      address: 'Rua Nova Geração',
      address_number: 189,
      district: 'Kaikan Sul',
      city: 'Teixeira de Freitas',
      state: 'BA',
      country: 'BR',
      cep: 69315325,
      role: 'client',
    }
  ], {
    timestamps: false,
    tableName: 'users',
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
