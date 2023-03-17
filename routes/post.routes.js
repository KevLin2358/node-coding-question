const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../models');
const Post = db.post;
const validatePostInput = require('../validations/post');
const { create } = require('domain');
const moment = require('moment');

router.get('/:id', (req, res) => {
  Post.findByPk(req.params.id)
    .then(post => {
      let createdAt = post.createdAt
      relativeTime = moment(createdAt).startOf('day').fromNow()
      post.relativeTime = relativeTime
      res.json(post)
    })
    .catch(err => 
      res.status(404).json({noPostFound: "No post found with that ID"})
    )
})

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

router.patch('/:id',   
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findByPk(req.params.id)
      .then(post => {
        post.title = req.body.title
        post.description = req.body.description
        post.save()
        res.json(post)
      })
      .catch(err => {
        res.status(404).json({noPostFound: "No post found with that ID"})
      })
})

module.exports = router;