/* global require */ 
'use strict';

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  apiVersion: '1.4',
  host: 'localhost:9200'
  // log: 'trace'
});

// client.ping({
//   requestTimeout: 1000,
//   hello: "elasticsearch!"
// }, function (err) {
//   if (err) {
//     console.error(err);
//     return void 0;
//   }
//   console.log('All is well!');
// });

client
  .ping({
    requestTimeout: 1000,
    hello: 'elasticsearch'
  })
  .then(
    function (res) {
      console.log('all is well');
    },
    function (err) {
      return console.log(err);
    }
  );