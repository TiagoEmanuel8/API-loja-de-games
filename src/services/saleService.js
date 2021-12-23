const { Sale, User } = require('../database/models');

const getSales = async (userInfo) => {
  const roleUser = userInfo.role
    if (roleUser === 'client') {
      return { code: 403, message: 'Only admins or sellers can add products' }
    };
  const sales = await Sale.findAll({
      include: [
        { model: User, as: 'user_id', attributes: { exclude: ['password'] } }
      ]
  });
  return sales;
};

module.exports = {
  getSales
}