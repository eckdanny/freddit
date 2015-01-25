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
            controllerAs: 'post',
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
