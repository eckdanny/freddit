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
        'de.environment',

        'de.posts',
        'de.about',
        'de.login',
        'de.activeUser',
        'de.search'
      ]
    )
    .config(fredditModuleConfig);

  function fredditModuleConfig ($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/posts');
  }


  function uiRouterErrorHandler ($rootScope) {

    // Handle StateChange Errors
    $rootScope.$on('$stateNotFound', stateNotFound);
    $rootScope.$on('$stateChangeError', stateChangeError);

    function stateNotFound (event, unfoundState, fromState, fromParams) { /* jshint unused: vars */
      console.log('' +
        'Oops! You found a dead link. ' +
        'The requested resource may have been removed from the application.'
      );
      event.preventDefault();
    }

    function stateChangeError (event, toState, toParams, fromState, fromParams, error) {

      if (404 === error.status) {
        console.log(error.data);
      } else {
        console.log(error.message);
      }

    }
  }

})(window, window.angular);
