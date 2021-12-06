module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true  },
    productId: { type: DataTypes.INTEGER, foreignKey: true  },
    quantity: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true
  });

  salesProducts.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sale.belongsToMany(models.product, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return salesProducts;
};
