import { DataTypes, Model } from 'sequelize';
import db from '.';
import Users from './users';
import Products from './products';
import Sales from './sales';

class SalesProducts extends Model {
  declare saleId: number;
  declare productId: number;
  declare quantity: number;
}

SalesProducts.init({
  saleId: {
    type: DataTypes.INTEGER,
    // foreignKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    // foreignKey: true
  },
  quantity: DataTypes.INTEGER
}, {
  underscored: true,
  sequelize: db,
  modelName: 'salesProducts',
  timestamps: false,
});

Products.belongsToMany(Sales, {
  as: 'sales',
  through: SalesProducts,
  foreignKey: 'productId',
  otherKey: 'saleId',
});

Sales.belongsToMany(Products, {
  as: 'product',
  through: SalesProducts,
  foreignKey: 'saleId',
  otherKey: 'productId',
});


export default SalesProducts;
