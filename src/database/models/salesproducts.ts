import { DataTypes, Model } from 'sequelize';
import db from '.';
import Users from './users';

class Sales extends Model {
  declare saleId: number;
  declare productId: number;
  declare quantity: number;
}

Sales.init({
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

export default Sales;
