"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: true,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: "seller_id",
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        foreignKey: true,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        field: "total_price",
        allowNull: false,
      },
      saleDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
        field: "sale_date",
        allowNull: false,
      },
      statusSale: {
        type: Sequelize.STRING,
        field: "status_sale",
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sales");
  },
};
