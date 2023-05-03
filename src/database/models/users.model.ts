import { DataTypes, Model } from 'sequelize';
import db from './index.model';
import Sales from './sales.model';

class Users extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare cpf: number;
  declare mobileNumber: number;
  declare address: string;
  declare addressNumber: string;
  declare district: string;
  declare city: string;
  declare state: string;
  declare country: string;
  declare cep: number;
  declare role: string;
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

export default Users;
