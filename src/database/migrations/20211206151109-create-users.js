'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mobileNumber: {
        type: Sequelize.INTEGER,
        field: 'mobile_number',
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressNumber: {
        type: Sequelize.STRING,
        field: 'address_number',
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'client'
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  }
};