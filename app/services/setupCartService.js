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
        cartCate: "A1 Food",
        cartProd : [{
            prodName:"",
            prodPrice:0,
            prodQty:0,
            prodImg:"images/hamburger.jpg"
        },
        {
            prodName:"",
            prodPrice:0,
            prodQty:0,
            prodImg:"images/sandwich.jpg"
        }]
    }, {
        id: 2,
        cartName: "Cart 002B",
        cartCate: "B1 Drink"
    }, {
        id: 3,
        cartName: "Cart 003C",
        cartCate: "C1 Dessert"
      
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
