module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true
  });

User.associate = (models) => {
  User.hasMany(models.Sale, { foreignKey: 'id', as: 'user_id' });
  // User.hasMany(models.Sale,
  //   { foreignKey: 'user_id', as: 'sales' },
  //   { foreignKey: 'seller_id', as: 'sales' }
  // );
};

  return User;
};
