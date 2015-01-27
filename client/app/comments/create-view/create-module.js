(function (window, angular, undefined) { 'use strict';

  var DIR = 'comments/create-view';

  angular
    .module('de.comments.createView', [])
    .config(createViewConfig);

  function createViewConfig ($stateProvider) {
    $stateProvider
      .state('app.view.comments.create', {
        url: '/create',
        views: {
          '': {
            templateUrl: DIR + '/create-view.html',
            controller: 'CommentCreateViewController',
            controllerAs: 'create'
          }
        }
      });
  }

})(window, window.angular);
