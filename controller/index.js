const router = require('express').Router();
const apiRoutes = require("./api")
const htmlroutes = require("./htmlroutes")

router.use('/api', apiRoutes);
router.use('/',htmlroutes);

module.exports = router;