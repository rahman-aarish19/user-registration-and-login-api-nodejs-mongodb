const config = require('config.js');
const jwt = require('jsonwebtoken');

module.exports = {
    isAuditor: function (req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).send({
                message: 'Unauthorized request'
            });
        }
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') return res.status(401).send({
            message: 'Unauthorized request'
        });

        try {
            let user = jwt.verify(token, config.secret);
            if (!user.isAuditor) return res.status(403).send({
                message: 'Access Denied.'
            });
            next();
        } catch (ex) {
            res.status(400).send({
                message: 'Invalid token.'
            });
        }
    }
}