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
                id: 10,
                cate: "Drink",
                name: "Water",
                price: 20,
                qty: 1,
                img: "images/drink/1-Water.jpg"
            }, {
                id: 7,
                cate: "Food",
                name: "Ginger Fried Rice Vegetarian Chicken",
                price: 78,
                qty: 1,
                img: "images/food/AK-12-GingerFriedRicewithVegetarianChickenV.png"
            }, {
                id: 4,
                cate: "Food",
                name: "Nasi Dagang with Chicken Curry",
                price: 90,
                qty: 1,
                img: "images/food/AK-7-NasiDagangwithChickenCurry.png"
            }, {
                id: 14,
                cate: "Drink",
                name: "Red Fanta",
                price: 30,
                qty: 1,
                img: "images/drink/5-RedFanta.jpg"
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
