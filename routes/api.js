const express = require('express');
const router = express.Router()

const auth = require('./auth');
const stats = require('./stats');

router.use('/auth', auth);
router.use('/stats', stats);

module.exports = router;