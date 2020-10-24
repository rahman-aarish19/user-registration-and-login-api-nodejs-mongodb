const config = require('config.js');
const mongoose = require('mongoose');

const connectionString = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : config.connectionString;

mongoose.connect(connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Audit: require('../audit/audit.model')
};