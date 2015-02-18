(function (window, angular, undefined) { 'use strict';

  var DIR = 'components/scaffolding';

  angular
    .module('de.scaffolding', [])
    .config(scaffoldingModuleConfig);

  function scaffoldingModuleConfig ($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: DIR + '/main.html'
      })
      .state('app.view', {
        abstract: true,
        views: {
          'header@app': {
            templateUrl: DIR + '/header.html'
          },
          'content@app': {
            template: '<div ui-view></div>'
          },
          'footer@app': {
            templateUrl: DIR + '/footer.html'
        },
        }
      });
  }

})(window, window.angular);
