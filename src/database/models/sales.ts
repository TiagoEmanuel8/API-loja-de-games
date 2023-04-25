import { DataTypes, Model } from 'sequelize';
import db from '.';

class Products extends Model {
  declare id: number;
  declare userId: string;
  declare sellerId: string;
  declare totalPrice: number;
  declare saleDate: Date;
  declare statusSale: string;
}

Products.init({
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

export default Products;
