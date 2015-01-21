(function (window, angular, undefined) { 'use strict';

  var DIR = 'login';

  angular
    .module('de.login')
    .controller('LoginController', LoginController);

  function LoginController () {

    var self = this;

    self.submit = function (formData) {
      console.log(formData);
    };
  }

})(window.angular, angular);
