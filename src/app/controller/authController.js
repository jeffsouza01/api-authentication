const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth.json');

function generateToken(params = {}) {
  return jwt.sign({
    params
    },
    authConfig.secrect, {
      expiresIn:1800
    });
}

module.exports = {
    async register(request, response)  {
        const { email } = request.body;

        if (await User.findOne({ email })) {
            return response.status(400).json({ error: 'E-mail já existente'});
        }

        try {
            const usuario = await User.create(request.body);

            usuario.senha = undefined;

            return response.json({
              usuario,
              token: generateToken({ id: usuario.id })
              });

        } catch(err) {
            return response.status(400).json({error: `${err}`})
        }
    },

    async authenticate(request, response) {
      const {email, senha} = request.body;

        try {
          const usuario = await User.findOne({ email }).select('+senha');

          if (!usuario || !await bcrypt.compare(senha, usuario.senha))
            return response.status(401).json({ error: 'Usuário e/ou senha inválidos'});


          now = new Date();

          await User.findByIdAndUpdate(usuario.id, {ultimo_login: now} , { upsert: true} );

          usuario.senha = undefined;

          return response.json({
            usuario,
            token: generateToken({ id: usuario.id })
          });

        } catch(err) {

            return response.json({error: `${err}`})

        }

    }
};
