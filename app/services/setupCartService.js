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
        cartName: "Cart 001A",
        floor: [{
            floorId: 1,
            cartCate: "A1 Food",
            cartProd: [{
                name: "Salad",
                price: 100,
                qty: 1,
                img: "images/sandwich.jpg"
            }, {
                name: "Salad",
                price: 100,
                qty: 1,
                img: "images/salad.jpg"
            }]
        }, {
            floorId: 2,
            cartCate: "A2 Foodx",
            cartProd: [{
                name: "Soup",
                price: 78,
                qty: 1,
                img: "images/soup.jpg"
            }]
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
    this.getTemp = function() {
        return {
            id: guid(),
            cartName: "",
            floor: [{
                floorId: 1,
                cartCate: "",
                cartProd: []
            }]
        };
    };
    this.setTemp = function() {
        return {
            id: guid(),
            cartName: "xx",
            cartCate: "",
            cartProd: []
        }
    };
});
