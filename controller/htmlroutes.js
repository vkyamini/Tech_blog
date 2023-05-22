const express = require('express');
const router = express.Router();
const {BlogPost} = require('../models');


// to render all the blogpost on blogs.handelbar page , initial page.
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

router.get('/user/login',async(req,res)=>{
    BlogPost.findAll().then(data=>{
        console.log("i am data raw", data);
        const postblogdata = data.map(blogobj=>blogobj.get({plain:true}))
        console.log('i am edited data' , postblogdata)
        res.render("blogs",{
            blogpost:postblogdata
        })
    })
})

router.get('/blogpost/:id',async(req,res)=>{
        try{
        const blogdata = await BlogPost.findByPk(req.params.id)
        //res.json(blogdata);
        const blogpost = blogdata.get({plain:true});
        console.log(blogpost);
        res.render('singleblogs', blogpost )
        }catch(err){
            res.status(500).json(err);
        };
    })
 
    router.get('/blogpost/delete/:id', async (req,res)=>{
        try{
           const blogdata = await BlogPost.findByPk(req.params.id)
           console.log(blogdata)
           const deletedata = blogdata.get({plain:true});
           res.render('delete', deletedata )
        }catch(err){
            res.status(500).json(err);
        };
    })
        
router.get("/login",(req,res)=>{
    res.render("login", {
        logged_in: req.session.logged_in,
    });
})

module.exports = router;