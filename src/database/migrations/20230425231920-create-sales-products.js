"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("salesProducts", {
      saleId: {
        type: Sequelize.INTEGER,
        references: { model: "sales", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "sale_id",
        foreignKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: "products", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "product_id",
        foreignKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("salesProducts");
  },
};
