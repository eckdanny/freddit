(function (window, angular, undefined) { 'use strict';

  var DIR = 'posts/list-view';

  angular
    .module('de.posts.listView', [])
    .config(listViewConfig);

  function listViewConfig ($stateProvider) {

    $stateProvider
      .state('app.view.posts.list', {
        url: '',
        views: {
          '': {
            templateUrl: DIR + '/list-view.html',
            controller: 'PostListViewController',
            controllerAs: 'list',
            resolve: {
              posts: function (PostService) {
                return PostService
                  .fetch()
                  .then(
                    function success (posts) {
                      return posts;
                    },
                    function error (err) {
                      debugger;
                    }
                  );
              }
            }
          }
        }
      });
  }

})(window, window.angular);
