module.exports = (sequelize, DataTypes) => {
 const sale = sequelize.define('sale', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   userId: { type: DataTypes.STRING, allowNull: false, foreignKey: true },
   sellerId: { type: DataTypes.STRING, allowNull: false, foreignKey: true },
   totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
   saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
   statusSale: { type: DataTypes.STRING, allowNull: false }
 }, {
   timestamps: false,
   underscored: true,
   tableName: 'sales'
 })

 sale.associate = (models) => {
  // sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user_id' });
  sale.belongsTo(models.user,
    { foreignKey: 'userId', as: 'users' },
    { foreignKey: 'sellerId', as: 'users' } 
  );
 };

  return sale;
};