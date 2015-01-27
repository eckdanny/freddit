(function (window, angular, _, undefined) { 'use strict';

  angular
    .module('de.environment')
    .provider('environment', environmentProvider);

  function environmentProvider () {

    var _defaults = {
      HOSTNAME: 'localhost',
      PORT: 3000,
      PATHNAME: ''
    };

    var _data = _.assign({}, _defaults);

    return {
      config: config,
      $get: InstanceFactory
    };

    function Instance () {}
    Instance.prototype = Object.create(null);
    Instance.prototype.constructor = Instance;

    function config (configObject) {

      // Validation
      if (!configObject.HOSTNAME) {
        throw new TypeError('invalid argument! Missing required property: HOSTNAME');
      }

      return (_data = configObject);
    }

    function InstanceFactory () {
      var instance =  Object.create(Instance.prototype);
      Object.defineProperties(instance, {
        'API_PATH': {
          enumerable: true,
          get: function () {
            return [
              (_data.PROTOCOL || '') + '//',
              _data.HOSTNAME,
              _data.PORT ? ':' + _data.PORT : '',
              _data.PATHNAME || ''
            ].join('');
          }
        }
      });
      return instance;
    }
  }

})(window, window.angular, window._);
