const bcrypt = require('bcrypt');

const saltRounds = 10;

const createHashPassword = async(password) => {
  const encrypt = await bcrypt.hash(password, saltRounds);
  return encrypt;
};

module.exports = {
  createHashPassword,
};
