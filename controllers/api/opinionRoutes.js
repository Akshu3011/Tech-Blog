const router = require('express').Router();
const { Blog, Opinion } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const opinionData = await Opinion.findAll({
      
    });

    res.status(200).json(opinionData);
  } catch(err){
    res.status(400).json(err);
  };
 
});

router.post('/:blog_id', withAuth, async (req, res) => {
  try {
    const newOpinion = await Opinion.create({
      comment:req.body.comment,
      blog_id: req.params.blog_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOpinion);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where:{
        user_id: req.session.user_id,
      }
      });
    const opinionData = await Opinion.destroy({
      where: {
        id: req.params.id,
        blog_id: blogData.user_id,
      },
    });

    if (!opinionData) {
      res.status(404).json({ message: 'No blog with this id!' });
      return;
    }

    res.status(200).json(opinionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
