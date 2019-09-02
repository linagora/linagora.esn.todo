(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.todo';

  angular.module(MODULE_NAME)
         .directive('seedApplicationMenu', seedApplicationMenu);

  function seedApplicationMenu(applicationMenuTemplateBuilder, SEED_MODULE_METADATA) {
    var directive = {
      restrict: 'E',
      template: applicationMenuTemplateBuilder('/#/example', '/images/application.png', 'Seed', 'core.modules.linagora.esn.todo.enabled', SEED_MODULE_METADATA.isDisplayedByDefault),
      replace: true
    };

    return directive;
  }
})();
