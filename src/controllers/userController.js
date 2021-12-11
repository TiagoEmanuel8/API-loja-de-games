const { userServices } = require('../services');

const createUser = async (req, res) => {
  try {
    const dataUser = req.body;
    const create = await userServices.createUser(dataUser);
    if (create.message) {
      return res.status(create.code).json({ message: create.message });
    }
    return res.status(201).json(create);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
};
