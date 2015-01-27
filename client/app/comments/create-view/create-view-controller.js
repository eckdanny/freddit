(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.comments.createView')
    .controller('CommentCreateViewController', CommentCreateViewController);

    // {
    //   upvotes: 0,
    //   downvotes: 0,
    //   title: 'Goodbye Cruel World!',
    //   body: 'I am the 2nd post. I was created from the angular app. The request should go from Client => (thru CORS) => API (restify) => es client => elasticsearch.',
    //   created: (new Date()).toISOString(),
    //   tags: ['hello world'],
    //   author: {
    //     displayName: 'Anonymous'
    //   },
    //   comments: []
    // };

  function CommentCreateViewController (author, $scope, commentService) {

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

      return commentService
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
