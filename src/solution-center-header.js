'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', ['$templateCache', function ($templateCache) {
  return {
    scope: {
      brand: '=',
      user: '=',
      modules: '=',
      logout: '&',
      solutionCenterUrl: '<?'
    },
    restrict: 'E',
    template: $templateCache.get('solution-center-header.html'),
    controller: 'SolutionCenterHeaderController',
    controllerAs: 'headerCtrl',
    bindToController: true
  };
}]);
