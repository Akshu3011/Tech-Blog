const User = require('./User');
const Blog = require('./Blog');
const Opinion = require('./Opinion');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Opinion,{
  foreignKey: 'blog_id'
})

module.exports = { User, Blog , Opinion };
