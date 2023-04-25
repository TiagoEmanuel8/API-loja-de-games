import { DataTypes, Model } from 'sequelize';
import db from '.';
import Users from './users';

class Sales extends Model {
  declare id: number;
  declare userId: string;
  declare sellerId: string;
  declare totalPrice: number;
  declare saleDate: Date;
  declare statusSale: string;
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
  modelName: 'products',
  timestamps: false,
});

Users.hasMany(Sales, {
  foreignKey: 'id',
  as: 'user_id'
})

Sales.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user_id'
})

export default Sales;
