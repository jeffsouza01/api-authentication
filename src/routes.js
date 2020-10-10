const express = require('express');
const routes = express.Router();

const AuthController = require('./app/controller/authController');
const SessionController = require('./app/controller/sessionController');

const authMiddleware = require('./app/middleware/auth');

routes.post('/sign_up', AuthController.register);
routes.post('/sign_in', AuthController.authenticate);
routes.get('/session', authMiddleware, SessionController.session);

module.exports = routes;
