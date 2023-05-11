const express = require('express');
const router = express.Router();
const {BlogPost,User,Comment} = require('../models');

router.get('/',async(req,res)=>{
    BlogPost.findAll().then(data=>{
        console.log("i am data raw", data);
        const postblogdata = data.map(blogobj=>blogobj.get({plain:true}))
        console.log('i am edited data' , postblogdata)
        res.render("blogs",{
            blogpost:postblogdata
        })
    })
})

// router.get('/',async(req,res)=>{
//     User.findAll().then(userdata=>{
//         console.log("i am data raw", userdata);
//         const userblogdata = userdata.map(blogobj=>blogobj.get({plain:true}))
//         console.log('i am edited user data' , userblogdata)
//         res.render("blogs",{
//             userpost:userblogdata
//         })
//     })
// })

// router.get('/:id',async(req,res)=>{
//     try{
//     const blogdata = await BlogPost.findByPk(req.params.id)
//     res.json(blogdata);
//     const finaldata = blogdata.get({plain:true});
//     res.render('blog',finaldata)
//     }catch(err){
//         res.status(500).json(err);
//     };
// })
//console.log("hai all")

// router.get("/",(req,res)=>{
//     BlogPost.findAll({
//         include:[User],
//         include:[Comment]
//     }).then(projData=>{
//         const hbsData = projData.map(proj=>proj.get({plain:true}));
//         console.log(hbsData);
//         res.render("blogs",{
//             allblogpost:hbsData,
//             logged_in: req.session.logged_in
//         })
//     })
// })






router.get("/login",(req,res)=>{
    res.render("login", {
        logged_in: req.session.logged_in,
    });
})

module.exports = router;