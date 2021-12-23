const { Sale, User, SalesProduct } = require('../database/models');

const createSales = async (dataSales) => {
  const { userId, sellerId, totalPrice, statusSale, products  } = dataSales;
  const addSale = await Sale.create({ userId, sellerId, totalPrice, statusSale });

  const saleId = addSale.id;

  const registerProduct = products.map(async ({ productId, quantity }) => {
    const product = await SalesProduct.create({ saleId, productId, quantity  });
    return product;
  });

  await Promise.all(registerProduct);

  return addSale;
};

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
  getSales,
  createSales
}