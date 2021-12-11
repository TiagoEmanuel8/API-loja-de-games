require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

  try {   
    const dataUserJwt = jwt.verify(token, secret);
    req.user = dataUserJwt;
  } catch (e) {
    return res.status(401).json({ message: 'invalid token or expired' });
  }
  next();
};

module.exports = validateJwt;
