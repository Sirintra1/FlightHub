'use strict';

/**
 * @ngdoc function
 * @name inflightHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inflightHubApp
 */
angular.module('inflightHubApp').service('comboProductservice', function() {

    var combos = [{
            id: 1,
            comboName: "Set 1",
            comboMoney: 250,
            comboProd: [{
                prodId: 1,
                prodImg: "images/hamburger.jpg",
                prodQty: "1"
            }, {
                prodId: 2,
                prodImg: "images/sandwich.jpg",
                prodQty: "1"
            },
            {
                prodId: 3,
                prodImg: "images/Macaroni.jpg",
                prodQty: "1"
            },
            {
                prodId: 4,
                prodImg: "images/salad.jpg",
                prodQty: "1"
            }]
        }];
        // var combos = [{
        //         id: 1,
        //         comboName: "Set 1",
        //         comboMoney: 250,
        //         img: "images/hamburger.jpg"
        //     }, {
        //         id: 2,
        //         comboName: "Set 2",
        //         comboMoney: 350,
        //         img: "images/hamburger.jpg"
        //     }

    // ];

    this.getComboList = function() {
        return combos;
    };

    this.getCombo = function(arr, id) {
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
