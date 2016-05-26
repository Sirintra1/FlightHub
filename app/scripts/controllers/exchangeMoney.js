'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp')
    .controller('exchangeMoneyCtrl', function($scope, exchangeMoneyService, $filter, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $scope.exchanges = [];
        $scope.isEdit = $routeParams.exchangeID ? true : false;
        $scope.newExchange = {};
        $scope.init = function() {
            $scope.exchanges = exchangeMoneyService.getExchangeList();
        }

        $scope.newFn = function() {
            $scope.newExchange = {};
        };

        $scope.addExchange = function() {
            $scope.newExchange.id = guid();
            $scope.exchanges.push($scope.newExchange);
            $scope.newFn();
        };

        $scope.deleteExchange = function(id){
            exchangeMoneyService.deleteExchange(id);
        };


        $scope.setVal = function() {
            // alert('');
            // var result = $filter("filter")($scope.carts, { id: $routeParams.cardID });
            var result = exchangeMoneyService.getExchange($scope.exchanges, $routeParams.exchangeID);
            console.log(result);
            if (result) {
                $scope.newExchange = result;
            }

        };

        $scope.editFn = function() {
            //
        };
        $scope.init();

        if ($routeParams.exchangeID) {
            $scope.setVal();
        } else {
            $scope.newFn();
        }





    });
