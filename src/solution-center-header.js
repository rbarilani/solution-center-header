'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', function ($templateCache) {
  return {
    scope: {
      brand: '=',
      user: '=',
      modules: '=',
      logout: '&'
    },
    restrict: 'E',
    template: $templateCache.get('solution-center-header.html'),
    controller: 'SolutionCenterHeaderController',
    controllerAs: 'headerCtrl',
    bindToController: true
  };
});