'use strict';

angular.module('solutionCenter', []).directive('solutionCenterHeader', function () {
  var value = 0;

  return {
    restrict: 'E',
    templateUrl: 'solution-center-header.html',
    replace: true,
    link: function ($scope) {

      $scope.getValue = function () {
        return value;
      };
      $scope.increment = function () {
        value++;
      };
    }
  };
});