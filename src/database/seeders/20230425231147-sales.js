"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "sales",
      [
        {
          id: 1,
          user_id: 3,
          seller_id: 2,
          total_price: 70.0,
          sale_date: "2021/12/08",
          status_sale: "pedido recebido",
        },
        {
          id: 2,
          user_id: 3,
          seller_id: 2,
          total_price: 169.8,
          sale_date: "2021/12/08",
          status_sale: "pagamento concluido",
        },
        {
          id: 3,
          user_id: 3,
          seller_id: 2,
          total_price: 281.0,
          sale_date: "2021/12/08",
          status_sale: "pedido enviado",
        },
      ],
      {
        tableName: "sales",
        timestamps: false,
        underscored: true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
