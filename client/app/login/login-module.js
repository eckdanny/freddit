(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.login', [])
    .config(LoginModuleConfig);

  function LoginModuleConfig ($stateProvider) {

    $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          'content@app': {
            template: 'Login Form Here!'
          }
        }
      });
  }

})(window.angular, angular);
