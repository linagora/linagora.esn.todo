(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.todo';

  angular.module(MODULE_NAME)
         .controller('seedHomeController', seedHomeController);

   function seedHomeController() {
     this.message = 'Seed home!';
    }
})();
