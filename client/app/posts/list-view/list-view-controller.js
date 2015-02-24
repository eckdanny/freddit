(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('de.posts.listView')
    .controller('PostListViewController', PostListViewController);

  function PostListViewController (posts, $scope, $state, $location, $q, $timeout, PostService, PagerFactory) {

    var self = this;

    angular.extend(this, {
      posts: posts,
      goToPostView: goToPostView,
      pager: PagerFactory.create(posts.meta, $scope, callback)
    });

    function callback (meta) {
      PostService
        .getList({
          limit: meta.limit,
          offset: meta.offset
        })
        .then(function (posts) {
          var d = $q.defer();
          $timeout(function () {
            d.resolve(posts);
          }, 1000);
          return d.promise;
        })
        .then(function (posts) {

          // Refresh posts
          self.posts = posts;

          // Update pager
          self.pager.meta.set({
            offset: posts.meta.offset,
            limit: posts.meta.limit,
            fromServer: true
          });

          // Update query string params
          $location.search(_.pick(self.pager.meta, ['offset', 'limit']));
        });
    }

    function goToPostView (post) {
      $state.go('app.view.posts.one', { id : post._id });
    }
  }

})(window, window.angular, window._);
