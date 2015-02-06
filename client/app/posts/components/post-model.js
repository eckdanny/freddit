(function (window, ns) { 'use strict';

  ns.Post = ns.Post || Post;

  function Post () {}

  Post.prototype.constructor = Post;

  Post.prototype.foo = function () {
    return 'foo';
  };

  Post.prototype.sayHi = function () {
    return this;
  };

})(window, window.freddit || (window.freddit = {}));
