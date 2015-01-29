(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.posts.createView')
    .controller('PostCreateViewController', PostCreateViewController);

  function PostCreateViewController (author, $scope, PostService) {

    var self = this;

    angular.extend(self, {
      author: author
    });

    angular.extend($scope, {
      formData: {
        author: author
      }
    });

    self.onSubmit = function (formData) {

      return PostService
        .create(formData)
        .then(
          function success (res) {
            debugger;
          },
          function error (err) {
            debugger;
          }
        );

      // return $http
      //   .post(
      //     'http://localhost:8080/posts',
      //     formData
      //   )
      //   .then(
      //     function success (res) {
      //       console.log(res);
      //       return res;
      //     },
      //     function error (err) {
      //       debugger;
      //     }
      //   );
    };
  }

})(window, window.angular);
