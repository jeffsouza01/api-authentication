const express = require('express');
const routes = express.Router();

const AuthController = require('./app/controller/authController');
const SessionController = require('./app/controller/sessionController');

const authMiddleware = require('./app/middleware/auth');

routes.post('/register', AuthController.register);
routes.post('/login', AuthController.authenticate);
//routes.post('/forgot_password', AuthController.forgotPassword);
routes.get('/', authMiddleware, SessionController.session);

module.exports = routes;
