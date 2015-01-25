var elasticsearch = require('elasticsearch');

var es = new elasticsearch.Client({
  apiVersion: '1.4',
  host: 'localhost:9200'
});

// [TypeError: Unable to build a path with those params. Supply at least index, type, id]
// es.get({
//   index: 'freddit',
//   type: 'post'
// }, function (err, res) {
//   if (err) {
//     console.log(err);
//     return void 0;
//   }
//   console.log(res);
// });

es
  .search({
    index: 'freddit',
    type: 'post',
    body: {
      query: {
        match_all: {}
      }
    }
  })
  .then(
    function (res) {
      console.log('Success!');
      console.log(res);
    },
    function (err) {
      console.log(err);
    }
  );