const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader)
      return response.status(401).json({ error: 'Não autorizado'});

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
      return response.status(401).json({ error: 'Erro no Token' });

    const [ bearer, token ] = parts;

    if (!/^Bearer$/i.test(bearer))
      return response.status(401).json({ error: 'Token Mal Formatado' });

    jwt.verify(token, authConfig.secrect, (error, decoded) => {
      if (error) return response.status(401).json({ error: 'Não autorizado'});

      request.userId = decoded.params.id;
      return next();
    })
}
