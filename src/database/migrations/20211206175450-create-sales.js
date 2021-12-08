'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        allowNull: false
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        allowNull: false
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price',
        allowNull: false
      },
      saleDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
        field: 'sale_date',
        allowNull: false
      },
      statusSale: {
        type: Sequelize.STRING,
        field: 'status_sale',
        allowNull: false
      },
      createdAt: {
       allowNull: false,
       type: Sequelize.DATE,
       defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
       allowNull: false,
       type: Sequelize.DATE,
       defaultValue: Sequelize.fn("NOW"),
     }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};