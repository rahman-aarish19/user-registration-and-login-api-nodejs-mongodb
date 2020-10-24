const config = require('config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Audit = db.Audit

module.exports = {
    createAudit, getAll
}

async function createAudit({ token, loggedOutAt }) {
    try {
        const { username, ipAddress, isAuditor, loggedInAt } = jwt.verify(token, config.secret);
        let audit = new Audit({ username, ipAddress, loggedInAt, loggedOutAt });
        if (isAuditor) audit.profile = 'Auditor';
        await audit.save();
        return 'Audit record added successfully!';

    } catch (ex) { throw ex; }
}

async function getAll() {
    return await Audit.find().select('-_id');
}