const router = require('express').Router();

router.use("/login", (req, res) => {
    res.json({login: true})
});

module.exports = router;