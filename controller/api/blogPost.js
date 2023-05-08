const router = require('express').Router();

router.use("/all", (req, res) => {
    res.json({blogPost: true})
});

module.exports = router;