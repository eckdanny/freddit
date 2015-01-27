/* jshint node: true */

'use strict';

var restify = require('restify');
var elasticsearch = require('elasticsearch');
var _ = require('lodash');

var ENV = {
  PORT: 3000
};

var es = new elasticsearch
  .Client({
    apiVersion: '1.4',
    host: 'localhost:9200'
  });

var server = restify.createServer();

// Config...
server.use(restify.CORS());
server.use(restify.bodyParser({
  maxBodySize: 0,
  mapParams: true,
  mapFiles: false,
  overrideParams: false,
  multipartHandler: function(part) {
      part.on('data', function(data) {
        /* do something with the multipart data */
      });
  },
  multipartFileHandler: function(part) {
      part.on('data', function(data) {
        /* do something with the multipart file data */
      });
  },
  keepExtensions: false,
  // uploadDir: os.tmpdir(),
  multiples: true
}));

// Define Routes...
server.post('/posts', function create (req, res, next) {
  es.create({
    index: 'freddit', 
    type: 'posts',
    body: req.body
  }, function (err, data) {
    if (err) {
      console.log(err);
      return void 0;
    }
    console.log(data);
    res.send(data);
    next();
  });
});

// TODO pluralization of endpoints is a good idea, but the _type's should be singular!
server.get('/post/:postId', function (req, res, next) {

  console.log(req.params.postId);

  es
    .get({
      index: 'freddit',
      type: 'posts',
      id: req.params.postId,
      fields: [
        '_timestamp',
        '_source'
      ]
    }, function (err, data) {
      if (err) {
        console.log(err);
        return void 0;
      }
      console.log(data);
      res.send(
        _.assign(
          data._source,
          data.fields,
          _.pick(data, '_id')
        )
      );
      next();
    });
});

server.get('/posts', function (req, res, next) {
  es
    .search({
      index: 'freddit',
      type: 'posts',
      body: {
        fields: [
          '_timestamp',
          '_source'
        ],
        query: {
          match_all: {}
        }
      }
    }, function (err, data) {

      console.log(data);

      if (err) { return; }
      res.send(
        _.map(data.hits.hits, function (val) {
          return _.assign(
            val._source,
            val.fields,
            _.pick(val, '_id')
          );
        })
      );
      next();
    });
});

server.listen(ENV.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
