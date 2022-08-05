const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const opinionRoutes = require('./opinionRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/opinion', opinionRoutes);

module.exports = router;
