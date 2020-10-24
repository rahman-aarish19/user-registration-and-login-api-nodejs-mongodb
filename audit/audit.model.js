const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: { type: String, required: true },
    ipAddress: { type: String, required: true },
    loggedInAt: { type: Number, required: true },
    loggedOutAt: { type: Number, required: true },
    profile: { type: String, required: true, default: 'Normal User' }
});

// schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Audit', schema);