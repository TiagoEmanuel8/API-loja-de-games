const { encrypt } = require('../utils');
const { User } = require('../database/models');

const createUser = async (dataUser) => {
  const { name, email, password, cpf, mobileNumber, address,
    addressNumber, district, city, state, country, cep, role } = dataUser;

  const checkUser = name && email && password && cpf && address && district && city && state && country && cep
  
  if (!checkUser) {
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

  if (role !== 'administrator' && role !== 'seller' && role !== 'client') {
    return { code: 400, message: 'the role field must be administrator, seller or client' }
  }

  const encryptPassword = await encrypt.createHashPassword(password)
  await User.create({ name, email, password: encryptPassword, cpf, mobileNumber, address, addressNumber, district, city, state, country, cep, role })
  
  const messageRegister = 'successfully registered user';
  return messageRegister;
};

const getUsers = async (userInfo) => {
  const roleUser = userInfo.role
  if (roleUser === 'client') {
    return { code: 401, message: 'invalid authorization' }
  };
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
}

module.exports = {
  createUser,
  getUsers
};
