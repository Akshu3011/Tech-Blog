const sequelize = require('../config/connection');
const { User, Blog, Opinion } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const opinionData = require('./opinionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const opinion of opinionData) {
    await Opinion.create({
      ...opinion,
      blog_id: blogs[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
