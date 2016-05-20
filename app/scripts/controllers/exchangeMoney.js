'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
  .controller('exchangeMoneyCtrl', function ($scope) {
    
    $scope.exchanges = [{Name:"EUR",change:"40.35"},
    {Name:"USD",change:"35.65"}];
  });
