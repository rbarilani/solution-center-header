'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', function () {
  return {
    scope: {
      brand: '=',
      user: '=',
      modules: '=',
      logout: '&'
    },
    restrict: 'E',
    templateUrl: 'solution-center-header.html',
    controller: 'SolutionCenterHeaderController',
    controllerAs: 'headerCtrl',
    bindToController: true
  };
});