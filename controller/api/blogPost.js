const router = require('express').Router();
const { BlogPost } = require('../../models');

// CRUD
// router.use("/all", (req, res) => {
//     res.json({blogPost: true})
// });

router.get("/",(req,res)=>{
  BlogPost.findAll().then(data=>{
      res.json(data)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({msg:"invalid syntax hence ,error occurred",err})
  })
});

router.get("/:id", (req,res) => {
  BlogPost.findByPk(req.params.id).then(data=>{
    res.json(data)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"invalid syntax hence ,error occurred",err})
  })
})

router.post('/', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(403).json({msg:"login first!"})
  }
  try {
    const newBlog = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", (req,res) => {
  BlogPost.destroy({where: {id: req.params.id}}).then(data=>{
    res.json({msg: `deleted blog with id: ${req.params.id}`});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"invalid syntax hence ,error occurred",err})
  })
});

router.put("/:id", (req, res) => {
  BlogPost.update({title: req.body.title, content: req.body.content}, {where: {id: req.params.id}}).then(data=>{
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"invalid syntax hence ,error occurred",err})
  })
})

module.exports = router