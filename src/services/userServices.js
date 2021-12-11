const utils = require('../utils');
const { User } = require('../database/models');

const createUser = async (dataUser) => {
  const { name, email, password, cpf, mobile_number, address,
    address_number, district, city, state, country, cep, role } = dataUser;
  
  if (!name || !email || !password || !cpf || !address ||
    !district || !city || !state || !country || !cep) {
      return { code: 400,
        message: 'the fields "name", "email", "password", "cpf", "address", "district", "city", "state", "country" and "cep" are required.'};
  }
  
  const findUser = await User.findOne({ where: { email }});
  if (findUser) {
    return { code: 409, message: 'email already registered' }
  }

  const verifyLengthPassword = password.length > 6 && password.length < 10;
  if(!verifyLengthPassword) {
    return { code: 409, message: 'password must contain between 6 and 10 characters' }
  }

  const encryptPassword = await utils.createHashPassword(password)
  await User.create({ name, email, password: encryptPassword, cpf, mobile_number, address, address_number, district, city, state, country, cep, role })
  
  const messageRegister = 'successfully registered user';
  return messageRegister;
};

module.exports = {
  createUser,
}