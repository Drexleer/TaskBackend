const userRoute = require('express').Router();
const userRegister = require('../controllers/User/register');
const userLogin = require('../controllers/User/login');
const getUser = require('../controllers/User/userById');

userRoute.post('/register', userRegister);
userRoute.post('/login', userLogin);
userRoute.get('/:id', getUser);

module.exports = userRoute;
