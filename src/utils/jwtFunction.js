require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const createJwt = async (payload) => {
  const jwtConfig = { algorithm: 'HS256', expiresIn: '30d' };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = {
  createJwt,
};
