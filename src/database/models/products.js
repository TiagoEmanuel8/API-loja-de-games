module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    url_image: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'products',
  });

  return Product;
};
