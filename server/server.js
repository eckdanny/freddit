var restify = require('restify')
  , elasticsearch = require('elasticsearch')

  ;
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
  // console.log(typeof req.body);
  // console.log(req.body.a);
  // es.create({
  //   index: 'freddit',
  //   type: 'post',
  //   body: 
  // })
  // res.send(201, )
  // res.send('alskdfklasdjf');

  es.create({
    index: 'freddit', 
    type: 'post',
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

  // next();
});

server.get('/posts', function (req, res, next) {
  es
    .search({
      index: 'freddit',
      type: 'post',
      body: {
        query: {
          match_all: {}
        }
      }
    }, function (err, data) {
      if (err) { return; }
      res.send(data.hits.hits);
      next();
    });
});

// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}