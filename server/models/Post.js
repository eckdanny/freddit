/* jshint node: true */
'use strict';

var _ = require('lodash');

var es;

var defaults = {
  index: 'freddit',
  type: 'post'
};

var props = {
  upvotes:    0,    // Integer
  downvotes:  0,    // Integer
  title:      '',   // String
  body:       '',   // String
  tags:       [],   // String[]
  author:     {},   // Author
  comments:   []    // Comment[]
};

function Post (data) {
  _.assign(
    this,
    props,
    _.pick(data, _.keys(props))
  );
}

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
  var myPost = new Post(data);
  return es
    .create(
      _.assign(defaults, { body: myPost })
    );
};


/**
 * Find Posts
 * @param  {Object} [query=MatchAllQueryObject]  Find all matching documents
 * @param  {Number} [limit=10]  Records per page
 * @param  {Number} [offset=0]  Pagination offset
 * @param  {Object} [sort=TimestampSortObject]  Sort by create time
 * @return {Promise}
 */
Post.find = function (query, limit, offset, sort) {

  var args = Array.prototype.slice.call(arguments, 0);

  query   = args[0] || { "match_all": {} };
  limit   = args[1] || 10;
  offset  = args[2] || 0;
  sort    = args[3] || [ { "_timestamp" : { "order" : "desc" } } ];

  if (_.isString(query)) {
    query = JSON.parse(query);
  }

  if (_.isString(sort)) {
    sort = JSON.parse(query);
  }

  return es
    .search(
      _.assign(defaults, {
        body: {
          "fields": [
            "_timestamp",
            "_source"
          ],
          "from": offset,
          "size": limit,
          "query": query,
          "sort": sort
        }
      })
    )
    .then(
      function (data) {

        return {
          results: results(),
          meta: meta()
        };

        function results () {
          return _.map(data.hits.hits, function (val) {
            return _.assign(
              val._source,
              val.fields,
              _.pick(val, '_id')
            );
          });
        }

        function meta () {
          return {
            count: data.hits.total,
            offset: offset,
            limit: limit
          };
        }
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
