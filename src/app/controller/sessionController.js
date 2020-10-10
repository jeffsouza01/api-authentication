const User = require('../models/user');


module.exports = {
  async session (request, response) {
    const id = request.userId;
    const usuario = await User.findById({_id: id});


    response.json({message: 'Authenticated ', usuario });
  }
}
