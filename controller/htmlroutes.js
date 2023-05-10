const express = require('express');
const router = express.Router();
const {BlogPost,User,Comment} = require('../models');

router.get("/",(req,res)=>{
    res.render("blogs", {
        logged_in: req.session.logged_in,
    });
})

router.get("/",(req,res)=>{
    BlogPost.findAll({
        include:[User],
        include:[Comment]
    }).then(projData=>{
        const hbsData = projData.map(proj=>proj.get({plain:true}));
        console.log(hbsData);
        res.render("blogs",{
            allblogpost:hbsData,
            logged_in: req.session.logged_in
        })
    })
})






router.get("/login",(req,res)=>{
    res.render("login", {
        logged_in: req.session.logged_in,
    });
})

module.exports = router;