(function() {
  'use strict';

  angular
    .module('fst')
    .factory('promiseFactory', promiseFactory);

  function promiseFactory($q) {

    function getResponse(val) {
      var deferred = $q.defer();

      if (val === true) {
        deferred.resolve('This is totally true');
      } else {
        deferred.resolve('This is clearly false');
      }

      return deferred.promise;
    }

    return {
      getResponse : getResponse
    };

  }
})();