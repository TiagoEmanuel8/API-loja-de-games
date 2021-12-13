require('dotenv').config();
const { User } = require('../database/models');
const { encrypt } = require('../utils');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

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

  const payload = { id: user.id, role: user.role };
  const jwtConfig = { algorithm: 'HS256', expiresIn: '30d' };
  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

module.exports = { login };
