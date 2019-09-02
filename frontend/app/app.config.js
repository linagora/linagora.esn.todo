(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.todo';

  angular.module(MODULE_NAME)
    .config(seedApplicationMenu);

  function seedApplicationMenu(dynamicDirectiveServiceProvider) {
    var home = new dynamicDirectiveServiceProvider.DynamicDirective(true, 'seed-application-menu');

    dynamicDirectiveServiceProvider.addInjection('esn-application-menu', home);
  }
})();
