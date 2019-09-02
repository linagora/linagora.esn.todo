(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.todo';

  angular.module(MODULE_NAME)
    .constant('SEED_MODULE_METADATA', {
      id: 'linagora.esn.todo',
      title: 'Seed',
      icon: '/images/application.png',
      homePage: 'Seed',
      disableable: true,
      isDisplayedByDefault: true
    });
})();
