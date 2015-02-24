/* jshint node: true */
'use strict';

var _ = require('lodash');

module.exports = function (app, es) {

  var Post = require('../models/Post.js')(es);

  // GET /posts
  app.get('/posts', function (req, res, next) {
    Post
      .find(
        req.query.query,
        _.parseInt(req.query.limit, 10),
        _.parseInt(req.query.offset, 10),
        req.query.sort
      )
      .then(
        function success (data) {
          res.send(data);
          next();
        },
        function error (err) {
          next(err);
        }
      );
  });

  // GET /post
  app.get('/posts/:id', function (req, res, next) {
    Post
      .findOne(req.params.id)
      .then(
        function (data) {
          res.send(data);
          next();
        }, function (err) {
          next(err);
        }
      );
  });

  // POST /posts
  app.post('/posts', function (req, res, next) {
    Post
      .create(req.body)
      .then(
        function (data) {
          res.send(data);
          next();
        },
        function (err) {
          next(err);
        }
      );
  });

  // PUT /post/:id
  app.put('/posts/:id', function (req, res, next) {
    Post
      .update(req.params.id, req.body)
      .then(
        function success (data) {
          res.send(data);
          next();
        },
        function error (err) {
          next(err);
        }
      );
  });
};
