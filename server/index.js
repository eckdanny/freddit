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

var thePost = {
  upvotes: 0,
  downvotes: 0,
  title: 'Hello World!',
  body: 'I am the very first post. I was created using the nodejs es client',
  created: (new Date()).toISOString(),
  tags: ['first', 'hello world'],
  author: {
    displayName: 'Anonymous'
  },
  comments: []
};

client.create({
  index: 'freddit', 
  type: 'post',
  body: thePost
}, function (err, res) {
  if (err) {
    console.log(err);
    return void 0;
  }
  console.log(res);
  return res;
});