(function (window, angular, undefined) { 'use strict';

  var DIR = 'about';

  angular
    .module('de.about', [])
    .config(aboutModuleConfig);

  function aboutModuleConfig ($stateProvider) {

    $stateProvider
      .state('app.view.about', {
        url: '/about',
        views: {
          'content@app': {
            templateUrl: DIR + '/about.html'
          }
        }
      });
  }

})(window.angular, angular);
