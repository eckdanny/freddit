(function () { 'use strict';

  angular
    .module('de.posts',
      [
        'restangular',
        'de.posts.listView',
        'de.posts.createView',
        'de.posts.postView'
      ]
    )
    .config(commentsModuleConfig);

  function commentsModuleConfig ($stateProvider) {
    $stateProvider
      .state('app.view.posts', {
        url: '/posts',
        abstract: true,
        views: {
          'content@app': {
            template: '<div ui-view></div>'
          }
        }
      });
  }

})();
