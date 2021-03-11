const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        msg: "Get root route"
    })
})

module.exports = router;