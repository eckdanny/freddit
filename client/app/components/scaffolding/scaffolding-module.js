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
            template: 'header'
          },
          'content@app': {
            template: 'content'
        },
          'footer@app': {
            template: 'footer'
        },
        }
      });
  }

})(window, window.angular)
