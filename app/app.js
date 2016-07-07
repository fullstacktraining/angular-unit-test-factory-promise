(function() {
  'use strict';

  angular.module('fst', []);

  angular
  .module('fst')
  .controller('fstCtrl', function (promiseFactory) {

    var vm = this;

    vm.promiseValue = 'undefined';

    vm.onClick = function(val) {
      promiseFactory
        .getResponse(val)
        .then(function(res) {
          vm.promiseValue = res;
        });
    };

  });


})();