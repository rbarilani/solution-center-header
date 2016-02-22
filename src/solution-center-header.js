'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', function () {
  return {
    scope: {
      brand: '=',
      test: '@'
    },
    bindToController: true,
    restrict: 'E',
    templateUrl: 'solution-center-header.html',
    controller: 'solutionCenterHeaderController',
    controllerAs: 'headerCtrl'
  };
});