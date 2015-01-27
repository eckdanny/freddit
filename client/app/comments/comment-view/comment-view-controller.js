(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.comments.commentView')
    .controller('CommentViewController', CommentViewController);

  function CommentViewController (comment) {

    var self = this;

    angular.extend(self, {
      comment: comment
    });
  }

})(window, window.angular);
