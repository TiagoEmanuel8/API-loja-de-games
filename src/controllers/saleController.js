const { saleServices } = require('../services');

const createSales = async (req, res) => {
  try {
    const dataSales = req.body;
    const addSale = await saleServices.createSales(dataSales);
      if (addSale.message) {
        return res.status(addSale.code).json({ message: addSale.message });
      }
    return res.status(200).json(addSale);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
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
