module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    urlImage: { type: DataTypes.STRING, allowNull: false }
  }, {
    timestamps: false,
    tableName: 'products',
  })
  return product;
};