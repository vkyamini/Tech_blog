const router = require('express').Router();
const { BlogPost } = require('../../models');

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

// creates a new post and renders all tehblog post
router.post('/',async (req,res)=>{
  try{
  const newblog = BlogPost.create({

    title:req.body.title,
    content:req.body.content,
 });
 res.status(200).json(newblog);
 console.log('i am new blog post', newblog)
}catch(err){
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