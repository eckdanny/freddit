(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.comments.listView')
    .controller('CommentsListViewController', CommentsListViewController);

  function CommentsListViewController (comments) {

    var self = this;

    angular.extend(self, {
      comments: comments
    });
  }

})(window, window.angular);
