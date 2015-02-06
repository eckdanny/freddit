(function (window, angular, _, fred, undefined) { 'use strict';

  angular
    .module('de.posts')
    .factory('PostService', PostService)
    .factory('PostPagerService', PostPagerService);

  function PostPagerService () {
    var _data;
    return {
      get status () {
        return _data;
      },
      set status (data) {
        return ( _data = data );
      }
    };
  }

  function PostService (Restangular, PostPagerService) {
    return Restangular
      .withConfig(function (config) {
        return config
          .addResponseInterceptor(function (data, operation) {
            if ('getList' === operation) {
              PostPagerService.status = data.meta;
              return data.results;
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
