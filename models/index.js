
// import models
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');


// creating all the joins

User.hasMany(BlogPost);

BlogPost.hasMany(Comment);

BlogPost.belongsTo(User);

Comment.belongsTo(User);




module.exports = {
    User,
    BlogPost,
    Comment
};