const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../models');
const Post = db.post;
const validatePostInput = require('../validations/post');

router.post('/user/:user_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      photo: req.body.photo,
    });

    newPost.save()
      .then(post => res.json(post))
      .catch(err => console.log(err));
  }
);

module.exports = router;