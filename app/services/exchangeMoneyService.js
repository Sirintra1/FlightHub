'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('exchangeMoneyService', function() {

    
    var exchanges = [{
        id: 1,
        exchangeName: "EUR",
        exchangeMoney: 40.35
    }, {
        id: 2,
        exchangeName: "USD",
        exchangeMoney: 35.65
    }];

    this.getExchangeList = function() {
        return exchanges;
    };

    this.getExchange = function(arr, id) {
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    return arr[i];
                }
            }
            return [];
        }
        return [];

    };

    this.deleteExchange = function(id) {
            for (var i = 0; i < exchanges.length; i++) {
                if (exchanges[i].id == id) {
                    exchanges.splice(i, 1);
                    break;
                }
            }
            return exchanges;
        };
});
