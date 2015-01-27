/* jshint node: true */

'use strict';

var restify = require('restify');
var elasticsearch = require('elasticsearch');

var ENV = {
  PORT: 3000
};

var esClient = new elasticsearch
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

require('./routes/PostRoutes.js')(server, esClient);

server.listen(ENV.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
