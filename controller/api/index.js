const router = require('express').Router();
const userRoutes = require("./user");
const blogPostRoutes = require("./blogPost");
const commentRoutes = require("./comment");

router.use("/user", userRoutes);
router.use("/blogpost", blogPostRoutes);
router.use("/comment", commentRoutes);

module.exports = router;