(function (window, angular, undefined) { 'use strict';

  var DIR = 'comments/components';

  angular
    .module('de.comments')
    .directive('deComment', deCommentDirective);

  function deCommentDirective () {
    return {
      restrict: 'E',
      templateUrl: DIR + '/comment.html',
      scope: {
        comment: '='
      },
      link: function (scope, iElem, iAttrs) {
        console.log(scope.comment);
      }
    };
  }

})(window, window.angular);
