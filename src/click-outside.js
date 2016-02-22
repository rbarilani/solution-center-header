'use strict';

angular.module('solutionCenter').directive('clickOutside', ['$parse', '$document', function($parse, $document) {
  return {
    link: function(scope, element, attrs) {

      registerListener();

      scope.$on('$destroy', function() {
        unregisterListener();
      });


      // ---------- private methods ----------

      function eventHandler(ev) {
        if (!(element[0].contains(ev.target) || element[0] === ev.target)) {
          scope.$apply(attrs.clickOutside);
        }
      }

      function registerListener() {
        $document.bind('click', eventHandler);
        $document.bind('touchstart', eventHandler);
      }

      function unregisterListener() {
        $document.unbind('click', eventHandler);
        $document.unbind('touchstart', eventHandler);
      }

    }
  };
}]);