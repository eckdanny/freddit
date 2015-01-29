/* jshint node: true */
'use strict';

var _ = require('lodash');

var es;

var defaults = {
  index: 'freddit',
  type: 'post'
};

function Post () {}

//
// Instance Methods
//

Post.prototype = Object.create(null);
Post.prototype.constructor = Post;

Post.prototype.save = function () {
  return ( _.assign(this, this.prototype.constructor.update()) );
};

//
// Static Methods
//

Post.create = function (data) {
  return es
    .create(
      _.assign(defaults, { body: data })
    );
};

Post.find = function () {
  return es
    .search(
      _.assign(defaults, {
        body: {
          fields: [
            '_timestamp',
            '_source'
          ],
          query: {
            match_all: {}
          }
        }
      })
    )
    .then(
      function (data) {
        return _.map(data.hits.hits, function (val) {
          return _.assign(
            val._source,
            val.fields,
            _.pick(val, '_id')
          );
        });
      }
    );
};

Post.findOne = function (id) {
  return es
    .get({
      index: 'freddit',
      type: 'post',
      id: id,
      fields: [
        '_source',
        '_timestamp'
      ],
    })
    .then(
      function (data) {
        return _.assign(
          data._source,
          data.fields,
          _.pick(data, '_id')
        );
      }
    );
};

Post.update = function (id, data) {
  return es
    .update(
      _.assign(
        defaults,
        {
          id : id,
          body : { doc : data }
        }
      )
    );
};

Post.delete = function (req, res, next) {
  // body...
};

module.exports = function (elasticSearchClient) {
  es = elasticSearchClient;
  return Post;
};