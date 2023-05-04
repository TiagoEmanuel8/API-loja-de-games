import { DataTypes, Model } from 'sequelize';
import db from './index.model';
import Users from './users.model';
import Products from './products.model';
import SalesProducts from './salesproducts.model';

class Sales extends Model {
  declare id: number;
  declare userId: string;
  declare sellerId: string;
  declare totalPrice: number;
  declare saleDate: Date;
  declare statusSale: string;
  static associate: () => void;
}

Sales.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: DataTypes.STRING,
  sellerId: DataTypes.STRING,
  totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
  saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  statusSale: { type: DataTypes.STRING, allowNull: false },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'sales',
  timestamps: false,
});

const associate = () => {
  Users.hasMany(Sales, {
  foreignKey: 'id',
  as: 'saleId'
})

Sales.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user_id'
});

Sales.belongsToMany(Products, {
  through: SalesProducts,
  foreignKey: 'saleId',
  otherKey: 'productId',
});
}

Sales.associate = associate;

export default Sales;
