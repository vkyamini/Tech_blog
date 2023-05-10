
// import models
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost);

BlogPost.hasMany(Comment);

module.exports = {
    User,
    BlogPost,
    Comment
};