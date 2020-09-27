
module.exports = {
  async session (request, response) {
    console.log(request.userID);
    response.json({message: 'Authenticated ', user: request.userId });
  }
}
