'use strict';

var MODULE_NAME = 'linagora.esn.todo';
var MODULE_DIR_NAME = '/linagora.esn.todo';

angular.module(MODULE_NAME)

  .component('seedSubheaderButton', {
    templateUrl: MODULE_DIR_NAME + '/app/subheader/seed-subheader-button.html',
    bindings: {
      seedDisabled: '<?',
      seedClick: '&?',
      seedIconClass: '@?',
      seedIconText: '@?',
      seedIconPosition: '@?'
    },
    controllerAs: 'ctrl'
  });
