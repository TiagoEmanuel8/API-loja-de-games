const { User } = require('../database/models');
const { jwtFunctions, encrypt } = require('../utils')

const login = async (email, password) => {
  if(!email || !password) {
    return { code: 400, message: 'fields "email" and "password" are required' }
  };

  const user = await User.findOne({ where: { email } });

  if(email !== user.email) {
    return { code: 400, message: 'invalid "email" or "password"' }
  }

  const verifyPassword = await encrypt.isPasswordEqual(password, user.password)
  if(!verifyPassword) {
    return { code: 400, message: 'invalid "email" or "password"' }
  }
  
  // const payload = { id: user.id, email: user.email };
  // const token = jwtFunctions.createJwt(payload);
  // return token;

};

module.exports = { login };