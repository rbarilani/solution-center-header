'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', function () {
  return {
    restrict: 'E',
    templateUrl: 'solution-center-header.html',
    controller: 'solutionCenterHeaderController',
    controllerAs: 'headerCtrl',
    bindToController: true
  };
});