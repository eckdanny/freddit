(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.posts.postView')
    .controller('PostViewController', PostViewController);

  function PostViewController (post) {
    angular.extend(this, {
      post: post
    });
  }

})(window, window.angular);
