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
  
};

module.exports = {
  createUser,
}