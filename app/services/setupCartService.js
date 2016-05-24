'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('setupCartService', function() {
    var carts = [{
        id: 1,
        cartName: "Cart 001A"
    }, {
        id: 2,
        cartName: "Cart 002B"
    }, {
        id: 3,
        cartName: "Cart 003C",
        proList:[{
            idPro:1,
            price: 20,
            img: "" 
        },
        {
            idPro:2,
            price: 20,
            img: "" 
        }]
    }];

    this.getCartList = function() {
        return carts;
    };

    this.getCart = function(arr, id) {
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
});
