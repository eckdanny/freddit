(function (window, angular, _, fred, undefined) { 'use strict';

  angular
    .module('de.posts')
    .factory('PostService', PostService);

  function PostService (Restangular) {
    return Restangular
      .withConfig(function (config) {
        return config
          .addResponseInterceptor(function (data, operation) {
            if ('getList' === operation) {
              return _.extend(data.results, { meta : data.meta });
            }
            return data;
          });
      })
      .extendModel('posts', function (obj) {
        return angular.extend(obj, fred.Post.prototype);
      })
      .service('posts');
  }

})(window, window.angular, window._, window.freddit);
