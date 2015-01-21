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
        'ui.bootstrap',

        'de.scaffolding',

        'de.comments',
        'de.login'
      ],
      clientAppModuleConfig
    );

  function clientAppModuleConfig ($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/comments');
  }

})(window, window.angular);
