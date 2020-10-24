const config = require('config.js');
const mongoose = require('mongoose');

let constr = '';

if (process.env.NODE_ENV === 'production') {
    constr = process.env.MONGODB_URI;
} else {
    constr = config.connectionString;
}

mongoose.connect(constr, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Audit: require('../audit/audit.model')
};