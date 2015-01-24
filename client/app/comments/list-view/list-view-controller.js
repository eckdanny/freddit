(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.comments.listView')
    .controller('CommentsListViewController', CommentsListViewController);

  function CommentsListViewController (comments) {

    var self = this;

    angular.extend(self, {
      comments: comments
    });

    self.search = function (query) {
      console.log('You searched for ', query);
    };
  }

})(window, window.angular);
