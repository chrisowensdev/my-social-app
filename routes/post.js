const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        msg: "Get post route"
    })
})

module.exports = router;