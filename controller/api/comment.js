const router = require('express').Router();
const { Comment } = require('../../models');

// CRUD

// router.use("/all", (req, res) => {
//     res.json({blogPost: true})
// });

router.get("/",(req,res)=>{
  Comment.findAll().then(data=>{
      res.json(data)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({msg:"invalid syntax hence ,error occurred",err})
  })
})

router.post("/", (req, res) => {
  const newComment = {
    userId: req.body.userId,
    blogPostId: req.body.blogPostId,
    content: req.body.content
  }

  Comment.create(newComment).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(500).json({err})
  })
})

//const router = require('express').Router();
//const { Project } = require('../../models');

// router.post('/', async (req, res) => {
//   if(!req.session.logged_in){
//     return res.status(403).json({msg:"login first!"})
//   }
//   try {
//     const newcomment = await Comment.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newcomment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;