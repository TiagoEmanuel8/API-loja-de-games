"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};

// module.exports = (sequelize, DataTypes) => {
//   const Product = sequelize.define('Product', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     type: { type: DataTypes.STRING, allowNull: false },
//     price: { type: DataTypes.DECIMAL, allowNull: false },
//     quantity: { type: DataTypes.INTEGER, allowNull: false },
//     url_image: DataTypes.STRING
//   }, {
//     timestamps: false,
//     tableName: 'products',
//   });

//   return Product;
// };
