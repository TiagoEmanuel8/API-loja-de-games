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
    return { code: 409, message: 'User already registered' }
  }

  const verifyLengthPassword = password.length > 6 && password.length < 10;
  if(!verifyLengthPassword) {
    return { code: 409, message: 'password must contain between 6 and 10 characters' }
  }

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  if (!emailRegex) {
    return { code: 400, message: '"email" must be a valid email' };
  }

  if (role !== 'administrator' && role !== 'seller' && role !== 'client') {
    return { code: 400, message: 'the role field must be administrator, seller or client' }
  }

  // const typeNumber = typeof cpf !== 'number' || typeof mobileNumber !== 'number' || typeof addressNumber !== 'number' || typeof cep !== 'number';
  // if(typeNumber) {
  //   return { code: 400, message: 'fields "cpf", "mobileNumber", "addressNumber", "cep" must be numbers' }
  // };

  const encryptPassword = await encrypt.createHashPassword(password)
  await User.create({ name, email, password: encryptPassword, cpf, mobileNumber, address, addressNumber, district, city, state, country, cep, role })
  
  return true;
};

const getUsers = async (userInfo) => {
  const roleUser = userInfo.role
  if (roleUser === 'client') {
    return { code: 403, message: 'Only admins or sellers can listen users' }
  };
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUser = async (id, userInfo) => {
  const roleUser = userInfo.role
  if (roleUser === 'client') {
    return { code: 403, message: 'Only admins or sellers can listen users' }
  };
  
  const data = await User.findByPk(id);
  
  if(!data) {
    return { code: 404, message: 'User does not exist' }
  }

  const user = await User.findOne({ attributes: { exclude: ['password'] } }, { where: { id }});
  return user;
};

const editUser = async (id, dataUser, userInfo) => {
  const { name, email, cpf, mobileNumber, address,
    addressNumber, district, city, state, country, cep, role } = dataUser;

  const data = await User.findByPk(id);

  if(!data) {
    return { code: 404, message: 'User does not exist' }
  }

  if (role) {
    return { code: 400, message: 'Role cannot be edited' }
  }

  const user = await User.findOne({ where: { id }});
   
  if(userInfo.role === 'administrator') {
    return true
  }

  if(userInfo.id !== user.id) {
    return { code: 401, message: 'Unauthorized user' }
  };
  
  await User.update(
    { name, email, cpf, mobileNumber, address, addressNumber, district, city, state, country, cep },
    { where: { id } }
  );

  return true;
};

const deleteUser = async (id, userInfo) => {
  const data = await User.findByPk(id);

  if(!data) {
    return { code: 404, message: 'User does not exist' }
  }

  const user = await User.findOne({ where: { id }});
   
  if(userInfo.role === 'administrator') {
    return true
  }

  if(userInfo.id !== user.id) {
    return { code: 401, message: 'Unauthorized user' }
  };

  await User.destroy({ where: { id } });

  return true
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  editUser,
  deleteUser
};
