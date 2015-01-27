(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.comments.listView')
    .controller('CommentsListViewController', CommentsListViewController);

  function CommentsListViewController (comments, $state) {

    var self = this;

    angular.extend(self, {
      comments: comments
    });

    self.interact = function (comment) {
      $state.go('app.view.comments.one', {
        commentId: comment._id
      });
    };

    self.search = function (query) {
      console.log('You searched for ', query);
    };
  }

})(window, window.angular);
