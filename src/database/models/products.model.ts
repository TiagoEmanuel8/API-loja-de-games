import { DataTypes, Model, Sequelize } from 'sequelize';
import db from './index.model';
import Sales from './sales.model';
import SalesProducts from './salesproducts.model';

class Products extends Model {
  declare id: number;
  declare name: string;
  declare type: string;
  declare price: number;
  declare quantity: number;
  declare url_image: string;
  static associate: () => void;
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
  sequelize: db,
  underscored: true,
  modelName: 'products',
  timestamps: false,
});

const associate = () => {
    Products.belongsToMany(Sales, {
    through: SalesProducts,
    foreignKey: 'productId',
    otherKey: 'saleId',
  });
}

Products.associate = associate;

export default Products;
