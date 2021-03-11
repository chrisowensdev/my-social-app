const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        msg: "Get user route"
    })
})

module.exports = router;