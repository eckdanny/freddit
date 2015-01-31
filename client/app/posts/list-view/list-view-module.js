(function (window, angular, undefined) { 'use strict';

  var DIR = 'posts/list-view';

  angular
    .module('de.posts.listView', ['restangular'])
    .config(listViewConfig);

  function listViewConfig ($stateProvider, RestangularProvider) {

    RestangularProvider
      .setBaseUrl('//localhost:3000');

    $stateProvider
      .state('app.view.posts.list', {
        url: '',
        views: {
          '': {
            templateUrl: DIR + '/list-view.html',
            controller: 'PostListViewController',
            controllerAs: 'list',
            resolve: {
              // posts: function (PostService) {
              //   return PostService
              //     .fetch()
              //     .then(
              //       function success (posts) {
              //         return posts;
              //       },
              //       function error (err) {
              //         debugger;
              //       }
              //     );
              // }

              posts: function (Restangular) {
                return Restangular
                  .all('posts')
                  .getList();
              }

            }
          }
        }
      });
  }

})(window, window.angular);
