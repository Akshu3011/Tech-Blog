const router = require('express').Router();
const { Opinion } = require('../../models');
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

router.post('/', withAuth, async (req, res) => {
  try {
    const newOpinion = await Opinion.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOpinion);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const opinionData = await Opinion.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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
