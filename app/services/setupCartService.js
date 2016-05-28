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
                id: 4,
                name: "Sandwich",
                price: 90,
                qty: 1,
                img: "images/sandwich.jpg"
            }, {
                id: 3,
                name: "Salad",
                price: 100,
                qty: 1,
                img: "images/salad.jpg"
            }]
        }, {
            floorId: 2,
            cartCate: "A2 Foodx",
            cartProd: [{
                id: 7,
                name: "Soup",
                price: 78,
                qty: 1,
                img: "images/soup.jpg"
            }]
        }]
    }];
    var varTemp = {
        id: guid(),
        cartName: "",
        floor: [{
            floorId: 1,
            cartCate: "",
            cartProd: []
        }]
    };

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
    this.deleteCart = function(id) {
        for (var i = 0; i < carts.length; i++) {
            if (carts[i].id == id) {
                carts.splice(i, 1);
                break;
            }
        }
        return carts;
    };
    this.getTemp = function() {
        return varTemp;
    };
    this.setTemp = function(item) {
        varTemp = item;
    };
    this.clearTemp = function() {
        varTemp = {
            id: guid(),
            cartName: "",
            floor: [{
                floorId: 1,
                cartCate: "",
                cartProd: []
            }]
        };
    };
});
