const { saleServices } = require('../services');

const getSales = async (_req, res) => {
  const sales = await saleServices.getSales();
  return res.status(200).json(sales);
};

module.exports = {
  getSales
};
