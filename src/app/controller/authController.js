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
            const user = await User.create(request.body);

            user.password = undefined;

            return response.json({
              user,
              token: generateToken({ id: user.id })
              });

        } catch(err) {
            return response.status(400).json({error: `${err}`})
        }
    },

    async authenticate(request, response) {
        const {email, senha} = request.body;
        const user = await User.findOne({ email }).select('+senha');

        try {

            if (!user || !await bcrypt.compare(senha, user.senha))
                return response.status(401).json({ error: 'Usuário e/ou senha inválidos'});


            now = new Date();

            await User.findByIdAndUpdate(user.id, {ultimo_login: now});

            await user.save();

            user.senha = undefined;

            return response.json({
              user,
              token: generateToken({ id: user.id })
            });

        } catch(err) {

            return response.json({error: `${err}`})

        }

    }
};
