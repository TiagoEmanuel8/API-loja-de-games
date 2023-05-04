import { DataTypes, Model } from 'sequelize';
import db from './index.model';
import Products from './products.model';
import Sales from './sales.model';

class SalesProducts extends Model {
  declare saleId: number;
  declare productId: number;
  declare quantity: number;
  static associate: (models: any) => void;
}

SalesProducts.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  saleId: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    // references: { model: 'sales', key: 'id' },
    // onUpdate: 'CASCADE',
    // onDelete: 'CASCADE',
    // field: 'sale_id',
    // foreignKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    // references: { model: 'products', key: 'id' },
    // onUpdate: 'CASCADE',
    // onDelete: 'CASCADE',
    // field: 'product_id',
    // foreignKey: true,
  },
  quantity: DataTypes.INTEGER
}, {
  underscored: true,
  sequelize: db,
  modelName: 'salesProducts',
  timestamps: false,
});

// Products.belongsToMany(Sales, {
//   as: 'sale',
//   through: SalesProducts,
//   foreignKey: 'productId',
//   otherKey: 'saleId',
// });

// Sales.belongsToMany(Products, {
//   as: 'products',
//   through: SalesProducts,
//   foreignKey: 'saleId',
//   otherKey: 'productId',
// });


  Products.belongsToMany(Sales, {
    as: 'sales',
    through: SalesProducts,
    foreignKey: 'productId',
    otherKey: 'saleId',
  });

  Sales.belongsToMany(Products, {
    as: 'products',
    through: SalesProducts,
    foreignKey: 'saleId',
    otherKey: 'productId',
  });

export default SalesProducts;
