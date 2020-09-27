const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://authuser:mongodbUser01@authcloudproject.uqbgf.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;
