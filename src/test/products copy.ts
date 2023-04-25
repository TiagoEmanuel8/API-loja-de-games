import { DataTypes, Model } from 'sequelize';
import db from '.';

class Products extends Model {
  declare id: number;
  declare name: string;
  declare type: string;
  declare price: string;
  declare quantity: string;
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
  price: { type: DataTypes.DECIMAL, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  url_image: { type: DataTypes.STRING, allowNull: false },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'products',
  timestamps: false,
});

export default Products;
