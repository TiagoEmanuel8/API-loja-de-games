const { userServices } = require('../services');

const createUser = async (req, res) => {
  try {
    const dataUser = req.body;
    const create = await userServices.createUser(dataUser);
    if (create.message) {
      return res.status(create.code).json({ message: create.message });
    }
    return res.status(201).json({ message: 'successfully registered user' });
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

const getUsers = async (req, res) => {
  try {
    const userInfo = req.user;
    const users = await userServices.getUsers(userInfo)
      if (users.message) {
        return res.status(users.code).json({ message: users.message });
      }
    return res.status(200).json({ users })
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
  getUsers
};
