(function (window, angular, undefined) { 'use strict';

  var DIR = 'components/search';

  angular
    .module('de.search')
    .directive('deSearch', searchDirective);

  function searchDirective () {
    return {
      restrict: 'E',
      templateUrl: DIR + '/search.html',
      scope: {
        submit: '&'
      }
    };
  }

})(window, window.angular);
