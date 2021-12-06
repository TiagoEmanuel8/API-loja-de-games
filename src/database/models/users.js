module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.INTEGER, allowNull: false },
    mobileNumber: DataTypes.INTEGER,
    address: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    cep: { type: DataTypes.INTEGER, allowNull: false },
    role: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'user'
  });

  user.associate = (models) => {
    // User.hasMany(models.Sale, { foreignKey: 'id', as: 'user_id' });
    user.hasMany(models.sale,
      { foreignKey: 'user_id', as: 'sales' },
      { foreignKey: 'seller_id', as: 'sales' }
    );
  };
  return user;
};