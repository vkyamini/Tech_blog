const router = require('express').Router();

router.use("/one", (req, res) => {
    res.json({comments: true})
});

module.exports = router;