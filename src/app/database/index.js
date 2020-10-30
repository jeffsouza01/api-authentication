const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_SECRET}@authcloudproject.uqbgf.mongodb.net/AuthCloudProject?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;
