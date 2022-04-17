const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/frontend', async (req, res, next) => {
    const stats = await db.FrontendStat.findOne();

    res.json(stats);
})

module.exports = router;