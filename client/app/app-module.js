(function (window, angular, undefined) { 'use strict';

  /**
   * @ngdoc overview
   * @name clientApp
   * @description
   * # clientApp
   *
   * Main module of the application.
   */
  angular
    .module(
      'clientApp',
      [
        'ui.router',
        'de.scaffolding',
        'de.comments',
        'de.login'
      ],
      configFn
    );

  function configFn ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');

    $stateProvider

      .state('app', {
        abstract: true,
        templateUrl: 'components/scaffolding/main.html'
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

})(window, window.angular);
