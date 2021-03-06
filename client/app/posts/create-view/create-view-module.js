(function (window, angular, undefined) { 'use strict';

  var DIR = 'posts/create-view';

  angular
    .module('de.posts.createView', [])
    .config(createViewConfig);

  function createViewConfig ($stateProvider) {
    $stateProvider
      .state('app.view.posts.create', {
        url: '/create',
        views: {
          '': {
            templateUrl: DIR + '/create-view.html',
            controller: 'de.posts.createView.CreateViewController',
            controllerAs: 'createViewVm',
            resolve: {
              author: function () {
                return {
                  id: '113400492077408414896',
                  displayName: 'Danny Eck',
                  imgUrl: 'https://lh5.googleusercontent.com/-_chhC00bxcA/AAAAAAAAAAI/AAAAAAAAABI/hSS3BWqPWsQ/photo.jpg?sz=50'
                };
              }
            }
          }
        }
      });
  }

})(window, window.angular);
