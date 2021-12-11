const { loginServices } = require('../services')

const login = (req, res) => {
  try {
    const { email, password } = req.body
    const tokenJwt = loginServices.login(email, password)
    if (tokenJwt.message) {
      return res.status(tokenJwt.code).json({ message: tokenJwt.message });
    }
    return res.status(200).json(tokenJwt);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login };
