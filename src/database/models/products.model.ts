import { DataTypes, Model } from 'sequelize';
import db from './index.model';
import Users from './users.model';
import SalesProducts from './salesproducts.model';

class Products extends Model {
  declare id: number;
  declare name: string;
  declare type: string;
  declare price: number;
  declare quantity: number;
  declare url_image: string;
}

Products.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  url_image: { type: DataTypes.STRING, allowNull: true },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'products',
  timestamps: false,
});

export default Products;
