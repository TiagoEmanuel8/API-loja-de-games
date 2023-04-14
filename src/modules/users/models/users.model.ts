import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class users extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  cpf: number;

  @Column({
    type: DataType.BIGINT,
    field: 'mobile_number',
  })
  mobileNumber: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.BIGINT,
    field: 'address_number',
  })
  addressNumber: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  district: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  cep: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;
}
