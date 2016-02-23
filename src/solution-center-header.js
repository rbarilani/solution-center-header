'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', function () {
  return {
    scope: {
      brand: '='
    },
    restrict: 'E',
    templateUrl: 'solution-center-header.html',
    controller: 'SolutionCenterHeaderController',
    controllerAs: 'headerCtrl',
    bindToController: true
  };
});