(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.todo';
  var MODULE_DIR_NAME = '/linagora.esn.todo';

  angular.module(MODULE_NAME)
    .factory('seedRestangular', seedRestangular);

  function seedRestangular(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(MODULE_DIR_NAME + '/api');
      RestangularConfigurer.setFullResponse(true);
    });
  }
})();
