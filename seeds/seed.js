const sequelize = require('../config/connection');
const { User, BlogPost,Comment } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogPost.json');
const comment = require('./comment.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogPost = await BlogPost.bulkCreate(blogpostData, {
    individualHooks: true,
    returning: true,
  });
  const commentdata = await Comment.bulkCreate(comment, {
    individualHooks: true,
    returning: true,
  });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();
