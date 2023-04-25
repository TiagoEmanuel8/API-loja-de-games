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

// Sale.associate = (models) => {
//   Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user_id' });
  // Sale.belongsTo(models.User,
  //   { foreignKey: 'userId', as: 'users' },
  //   { foreignKey: 'sellerId', as: 'users' }
  // );
// };

//   User.hasMany(models.Sale, { foreignKey: 'id', as: 'user_id' });
Users.hasMany(Sales, {
  foreignKey: 'id',
  as: 'user_id'
})

Sales.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user_id'
})

// import Clubs from './Club';
// Matchs.init({})

// Clubs.hasMany(Matchs, {
//   foreignKey: 'homeTeam',
//   as: 'homeMatchs',
// });

// Matchs.belongsTo(Clubs, {
//   foreignKey: 'homeTeam',
//   as: 'homeClub',
// });

export default Sales;
