
// import models
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'blogpost_id'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'comment_id'
});

module.exports = {
    User,
    BlogPost,
    Comment
};