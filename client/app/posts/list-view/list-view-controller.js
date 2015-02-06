(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.posts.listView')
    .controller('PostListViewController', PostListViewController);

  function PostListViewController (posts, $state, PostPagerService, PostService) {

    var self = this;

    angular.extend(self, {
      posts: posts,
      pager: PostPagerService
    });

    self.interact = function (post) {
      $state.go('app.view.posts.one', {
        id: post._id
      });
    };

    self.search = function (query) {
      console.log('You searched for ', query);
    };

    self.onPageChange = function (pageNumber) {
      var a = (pageNumber - 1) * PostPagerService.status.limit;
      return PostService
        .getList({
          offset: a,
          limit: PostPagerService.status.limit
        })
        .then(function success (data) {
          posts.length = 0;
          Array.prototype.push.apply(posts, data);
          return posts;
        });
    };
  }

})(window, window.angular);
