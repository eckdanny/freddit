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
            template: 'content'
        },
          'footer@app': {
            templateUrl: DIR + '/footer.html'
        },
        }
      })

      .state('app.view.test', {
        url: '/test',
        views: {
          'content@app': {
            templateUrl: DIR + '/content.html'
          }
        }
      });
  }

})(window, window.angular);
