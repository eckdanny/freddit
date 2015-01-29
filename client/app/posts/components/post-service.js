(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('de.posts')
    .service('PostService', PostService);

  function PostService ($http, environment) {

    this.fetch = function (queryObject) {
      return $http
        .get(
          environment.API_PATH + '/posts',
          queryObject
        )
        .then(
          function success (res) {
            return res.data;
          },
          function error (err) {
            debugger;
          }
        );
    };

    this.one = function (id, queryObject) {

      if (!id || !_.isString(id)) {
        throw new TypeError();
      }

      return $http
        .get(
          environment.API_PATH + '/post' + '/' + id,
          queryObject
        )
        .then(
          function success (res) {
            return res.data;
          },
          function error (err) {
            debugger;
          }
        );
    };

    this.create = function (data) {
      return $http
        .post(
          environment.API_PATH + '/posts',
          data
        )
        .then(
          function success (res) {
            return res;
          },
          function error (err) {
            debugger;
          }
        );
    };
  }

})(window, window.angular, window._);
