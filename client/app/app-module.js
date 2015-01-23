(function (window, angular, undefined) { 'use strict';

  /**
   * @ngdoc overview
   * @name freddit
   * @description
   * # freddit
   *
   * Main module of the application.
   */
  angular
    .module(
      'freddit',
      [
        'ui.router',
        'ui.bootstrap',

        'de.scaffolding',

        'de.comments',
        'de.about',
        'de.login',
        'de.activeUser'
      ],
      fredditModuleConfig
    );

  function fredditModuleConfig ($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/comments');
  }

})(window, window.angular);
