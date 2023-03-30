'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
        type: Sequelize.BIGINT,
        allowNull: false
      },
      mobileNumber: {
        type: Sequelize.BIGINT,
        field: 'mobile_number',
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressNumber: {
        type: Sequelize.BIGINT,
        field: 'address_number',
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        // defaultValue: 'client',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
