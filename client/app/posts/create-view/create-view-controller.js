(function (window, angular, undefined) { 'use strict';

  angular
    .module('de.posts.createView')
    .controller('de.posts.createView.CreateViewController', CreateViewController);

  function CreateViewController (author, PostService) {
    angular.extend(this, {
      formData: { author: author },
      PostService: PostService
    });
  }

  CreateViewController.prototype.onSubmit = function (formData) {
    return this.PostService
      .post(formData);
  };

})(window, window.angular);
