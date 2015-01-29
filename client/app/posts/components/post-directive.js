(function (window, angular, undefined) { 'use strict';

  var DIR = 'posts/components';

  angular
    .module('de.posts')
    .directive('dePost', dePostDirective);

  function dePostDirective () {
    return {
      restrict: 'E',
      templateUrl: DIR + '/post.html',
      scope: {
        post: '=',
        onClick: '&'
      },
      link: function (scope, iElem, iAttrs) {
        console.log(scope.post);
      }
    };
  }

})(window, window.angular);
