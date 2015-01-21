(function (window, angular, undefined) { 'use strict';

  var DIR = 'login';

  angular
    .module('de.login', [])
    .config(loginModuleConfig);

  function loginModuleConfig ($stateProvider) {

    $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          'content@app': {
            templateUrl: DIR + '/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
          }
        }
      });
  }

})(window.angular, angular);
