(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.todo';

  angular.module(MODULE_NAME, [
    'ui.router',
    'op.dynamicDirective',
    'restangular',
    'esn.module-registry'
  ]);
})();
