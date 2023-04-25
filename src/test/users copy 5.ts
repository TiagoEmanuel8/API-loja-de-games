import { DataTypes, Model } from 'sequelize';
import db from '.';

class Users extends Model {
  declare id: number;
  declare name: number;
  declare email: number;
  declare password: number;
  declare cpf: number;
  declare mobileNumber: boolean;
  declare address: number;
  declare addressNumber: number;
  declare district: number;
  declare city: number;
  declare state: boolean;
  declare country: number;
  declare cep: number;
  declare role: number;
}

Users.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.BIGINT, allowNull: false },
  mobileNumber: DataTypes.BIGINT,
  address: { type: DataTypes.STRING, allowNull: false },
  addressNumber: DataTypes.BIGINT,
  district: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false },
  cep: { type: DataTypes.BIGINT, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },

}, { sequelize: db, timestamps: false, modelName: 'users', underscored: true });


// User.associate = (models) => {
//   User.hasMany(models.Sale, { foreignKey: 'id', as: 'user_id' });
  // User.hasMany(models.Sale,
  //   { foreignKey: 'user_id', as: 'sales' },
  //   { foreignKey: 'seller_id', as: 'sales' }
  // );
// };

// Clubs.hasMany(Matchs, {
//   foreignKey: 'homeTeam',
//   as: 'homeMatchs',
// });

// Matchs.belongsTo(Clubs, {
//   foreignKey: 'homeTeam',
//   as: 'homeClub',
// });

export default Users;
