const router = require('express').Router();
const auditService = require('./audit.service');
const { isAuditor } = require('../_helpers/auth');

router.get('/', isAuditor, getAll);
router.post('/add', createAudit);

module.exports = router;

function createAudit(req, res, next) {
    auditService.createAudit(req.body)
        .then(message => message ? res.json({ message }) : res.status(400).json({ message: 'something went wrong ...' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    auditService.getAll()
        .then(data => res.json(data))
        .catch(err => next(err));
}