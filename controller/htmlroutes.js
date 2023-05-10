const express = require('express');
const router = express.Router();

router.get("/",async(req,res)=>{
    res.render("blogs", {
        logged_in: req.session.logged_in,
    });
})

module.exports = router;