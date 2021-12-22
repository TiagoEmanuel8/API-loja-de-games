const { Sale, User } = require('../database/models');

const getSales = async () => {
  const sales = await Sale.findAll({
      include: [
        // { model: User, as: 'user_id' },
        { model: User, as: 'user_id', attributes: { exclude: ['password'] } }
      ]
  });
  return sales;
};

module.exports = {
  getSales
}