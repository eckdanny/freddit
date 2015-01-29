(function (window, angular, undefined) { 'use strict';

  var DIR = 'posts/post-view';

  angular
    .module('de.posts.postView', [])
    .config(postViewConfig);

  function postViewConfig ($stateProvider) {
    $stateProvider
      .state('app.view.posts.one', {
        url: '/:id',
        controller: 'PostViewController',
        controllerAs: 'one',
        templateUrl: DIR + '/post-view.html',
        resolve: {
          post: function ($stateParams, PostService) {
            return PostService
              .one($stateParams.id);
          }
        }
      });
  }

})(window, window.angular);
