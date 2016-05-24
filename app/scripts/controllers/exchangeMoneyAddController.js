'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('exchangeMoneyAddController', function($scope, $routeParams, exchangeMoneyService) {

        $scope.exchanges = exchangeMoneyService.getExchanges();
        for (var i = 0; i < $scope.exchanges.length; i++) {
            console.log($scope.exchanges[i]);
            if ($scope.exchanges[i].id == $routeParams.exchangeID) {
                console.log($scope.exchanges[i]);
                $scope.showExchange = $scope.exchanges[i];
                // $scope.products.splice(i, 1);
                break;
            }

        }
    });
