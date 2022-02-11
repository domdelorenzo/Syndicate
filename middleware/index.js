const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const APP_SECRET = process.env.APP_SECRET;

// functions to be used in login/signup controllers for authentication
const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};

const comparePassword = async (password, storedPassword) => {
  let match = await bcrypt.compare(password, storedPassword);
  return match;
};

const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET);
  return token;
};

// functions to be used in routes for authorization
const verifyToken = (req, res, next) => {
  const token = res.locals.token;
  try {
    let payload = jwt.verify(token, APP_SECRET);
    if (payload) {
      res.locals.payload = payload;
      return next();
    }
    res.status(401).send({ status: 'Error', message: 'Unauthorized' });
  } catch (error) {
    res.status(401).send({ status: 'Error', message: 'Unathorized' });
  }
};

const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    if (token) {
      res.locals.token = token;
      return next();
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', message: 'Unauthorized' });
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  verifyToken,
  stripToken
};
