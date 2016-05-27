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
        floor: [{
            floorId: 1,
            comboName: "Set 1",
            comboMoney: 250,
            comboProd: [{
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
            }, {
                id: 7,
                name: "Soup",
                price: 78,
                qty: 1,
                img: "images/soup.jpg"
            }, {
                id: 8,
                name: "Steak",
                price: 340,
                qty: 1,
                img: "images/steak.jpg"
            }]
        }]

    }];



    var varTemp = {
        id: guid(),
        floor: [{
            floorId: 1,
            comboName: "",
            comboMoney: 0,
            comboProd: []
        }]
    };

    this.deleteCombo = function(id) {
        for (var i = 0; i < combos.length; i++) {
            if (combos[i].id == id) {
                combos.splice(i, 1);
                break;
            }
        }
        return combos;
    };



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


    this.getTemp = function() {
        return varTemp;
    };
    this.setTemp = function(item) {
        varTemp = item;
    };
    this.clearTemp = function() {
        varTemp = {
            id: guid(),
            floor: [{
                floorId: 1,
                comboName: "",
                comboMoney: 0,
                comboProd: []
            }]
        };
    };
});
