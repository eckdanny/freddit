(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.posts.listView')
    .controller('PostListViewController', PostListViewController);

  function PostListViewController (posts, $state) {

    debugger;

    var self = this;

    angular.extend(self, {
      posts: posts
    });

    self.interact = function (post) {
      $state.go('app.view.posts.one', {
        id: post._id
      });
    };

    self.search = function (query) {
      console.log('You searched for ', query);
    };
  }

})(window, window.angular);
