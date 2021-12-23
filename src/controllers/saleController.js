const { saleServices } = require('../services');

const createSales = async (req, res) => {
  const dataSales = req.body;
  const addSale = await saleServices.createSales(dataSales);
  return res.status(200).json(addSale);
};

const getSales = async (req, res) => {
  try {
    const userInfo = req.user;
    const sales = await saleServices.getSales(userInfo);
      if (sales.message) {
        return res.status(sales.code).json({ message: sales.message });
      }
    return res.status(200).json(sales);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSales,
  createSales
};
